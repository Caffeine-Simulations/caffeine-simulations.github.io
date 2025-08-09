import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/News.css';
import Header from '../components/Header';

export default function News() {
  const [articles, setArticles] = useState([]);
  const [err, setErr] = useState(null);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/news/index.json`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then(setArticles)
      .catch(e => setErr(e.message));
  }, []);

  return (
    <div className="news">
      <Header title="News" />

      <main className="news-wrap" aria-labelledby="news-heading">
        <h1 id="news-heading" className="sr-only">News</h1>

        {err && (
          <p className="news-error" role="alert">
            Couldn’t load articles ({err})
          </p>
        )}

        <ul className="news-grid">
          {articles.map(a => (
            <li key={a.slug} className="news-card">
              <Link to={`/news/${a.slug}`} className="news-link">
                {a.image && (
                  <div className="card-media">
                    <img
                      loading="lazy"
                      src={`${process.env.PUBLIC_URL}/news/images/${a.image}`}
                      alt={a.title}
                    />
                  </div>
                )}
                <div className="card-body">
                  <strong className="card-title">{a.title}</strong>
                  <small className="card-date">{a.date}</small>
                  <p className="card-summary">{a.summary}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
