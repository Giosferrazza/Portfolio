import React from 'react';

function Project({ title, description, imageUrl }) {
  return (
    <div className="bg-white text-black p-4 rounded-lg shadow-lg">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Project;