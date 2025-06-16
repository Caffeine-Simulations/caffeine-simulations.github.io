import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import parseMarkdownWithFrontmatter from '../utils/parseMarkdown';
import './styles/NewsPage.css';

const YT_REGEX = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})(?:\S*)/;

export default function NewsPage() {
  const { slug } = useParams();
  const [content, setContent] = useState('');
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/news/${slug}.md`)
      .then(r => {
        if (!r.ok) throw new Error('Article not found');
        return r.text();
      })
      .then(text => {
        const { metadata, content } = parseMarkdownWithFrontmatter(text);
        setMetadata(metadata);
        setContent(content);
      })
      .catch(err => console.error(err));
  }, [slug]);

  // Override how links are rendered
  const components = {
  a: ({ href, children }) => {
    const m = YT_REGEX.exec(href);
    if (m) {
      const id = m[1];
      return (
        <div className="youtube-embed">
          <iframe
            title={`youtube-${id}`}
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
    // plain link—no extra wrapper
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
};


  if (!content) return <p>Loading…</p>;

// inside your NewsPage component’s return:
return (
  <article className="news-page">
    <h1>{metadata.title}</h1>
    <small>{metadata.date}</small>
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
    >
      {content}
    </ReactMarkdown>
  </article>
);

}
