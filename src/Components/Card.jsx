import React from 'react';

function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {/* Card Data */}
      {[
        { name: 'Chowmein', image: './src/assets/chowein.webp', description: 'Savory stir-fried noodles, vegetables, and protein, rich umami flavors.' },
        { name: 'Burger', image: './src/assets/burger.avif', description: 'Juicy beef patty, fresh veggies, melted cheese, toasted bun, flavorful delight.' },
        { name: 'Pizza', image: './src/assets/pizza.jpg', description: 'Cheesy, crispy crust, rich tomato sauce, savory toppings, oven-baked perfection.' },
        { name: 'Roll', image: './src/assets/rool.jpg', description: 'Soft wrap, spiced chicken, fresh veggies, tangy sauces, delicious handheld snack.' },
      ].map((item, index) => (
        <div key={index} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg w-full h-48 object-cover" src={item.image} alt={item.name} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            ;c{item.description}
            </p>
            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Order
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
