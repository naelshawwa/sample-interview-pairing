"use client";

import { useEffect, useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/solid';

export default function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('/api/recipes')
      .then(response => response.json())
      .then(data => setRecipes(data.recipes));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center mb-8">
        <h1>Yet Another Recipe Website</h1>
        <HeartIcon className="inline-flex size-6 text-purple-500 mr-2 icon"></HeartIcon>
      </header>
      <main className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="border rounded-lg shadow-lg bg-cover bg-center recipe"
              style={{ backgroundImage: `url(${recipe.image})` }}
            >
              <div className="recipe-content">
                <h2 className="text-xl font-bold">
                  {recipe.name} 
                </h2>
                <span className="ml-2 bg-purple-500 text-white text-xs font-semibold px-2 py-1 rounded recipe-rating">
                    {recipe.rating} / 5
                  </span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


