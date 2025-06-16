export default function parseMarkdownWithFrontmatter(markdown) {
  // Match YAML frontmatter delimited by triple dashes (---)
  // Handles Unix and Windows line endings
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/;
  const match = markdown.match(frontmatterRegex);

  let metadata = {};
  let content = markdown;

  if (match) {
    const rawFrontmatter = match[1];
    // Remove entire frontmatter block, including the --- markers
    content = markdown.slice(match[0].length);

    // Parse each line of the frontmatter into key/value pairs
    rawFrontmatter.split(/\r?\n/).forEach(line => {
      const [key, ...rest] = line.split(':');
      if (key && rest.length > 0) {
        metadata[key.trim()] = rest.join(':').trim();
      }
    });
  }

  return { metadata, content };
}
