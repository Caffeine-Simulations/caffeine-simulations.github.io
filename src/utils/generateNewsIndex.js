const fs = require('fs');
const path = require('path');

// Simple frontmatter parser: extracts metadata between --- delimiters
function parseFrontmatter(markdown) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
  const match = markdown.match(frontmatterRegex);
  let metadata = {};

  if (match) {
    const raw = match[1];
    raw.split(/\r?\n/).forEach(line => {
      const [key, ...rest] = line.split(':');
      if (key && rest.length) {
        metadata[key.trim()] = rest.join(':').trim();
      }
    });
  }

  return metadata;
}

// Paths (script now lives in src/utils)
const newsDir = path.resolve(__dirname, '../../public/news');
const indexFile = path.join(newsDir, 'index.json');

// Read all Markdown files in the news directory
const files = fs.readdirSync(newsDir).filter(file => file.endsWith('.md'));

// Build article metadata array
const articles = files.map(filename => {
  const slug = path.basename(filename, '.md');
  const filePath = path.join(newsDir, filename);
  const markdown = fs.readFileSync(filePath, 'utf-8');
  const metadata = parseFrontmatter(markdown);
  return { slug, ...metadata };
});

// Sort articles by date descending
articles.sort((a, b) => new Date(b.date) - new Date(a.date));

// Write (or overwrite) index.json
fs.writeFileSync(indexFile, JSON.stringify(articles, null, 2));
console.log(`✔ Generated index.json with ${articles.length} articles.`);
