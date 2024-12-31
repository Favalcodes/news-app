import React, { useEffect, useState } from 'react';
import NewsCard from '../components/NewsCard';
import { fetchNews } from '../services/api';

const Home = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews().then((response) => setNews(response.data.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      {news.map((article) => (
        <NewsCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Home;
