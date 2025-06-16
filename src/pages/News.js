// src/pages/News.js
import React, { useEffect, useState } from 'react';
import { Link }              from 'react-router-dom';
import './styles/News.css';       // make sure you import the CSS

export default function News() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/news/index.json`)
      .then(res => res.json())
      .then(setArticles);
  }, []);

  return (
    <div className="news-list">
      <h1>News</h1>
      <ul>
        {articles.map(article => (
          <li key={article.slug} className="news-card">
            <Link to={`/news/${article.slug}`}>
              {article.image && (
                <div className="card-image-container">
                  <img
                    src={`${process.env.PUBLIC_URL}/news/images/${article.image}`}
                    alt={article.title}
                    className="card-image"
                  />
                </div>
              )}
              <div className="card-content">
                <strong>{article.title}</strong>
                <small>{article.date}</small>
                <p>{article.summary}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
