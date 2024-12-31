import React from 'react';

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
      <p className="text-gray-700">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">
        Read More
      </a>
    </div>
  );
};

export default NewsCard;
