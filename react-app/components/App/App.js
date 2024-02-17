// src/components/App/App.js
import React, { useState } from 'react';
import Menu from '../Menu/Menu'; // Menuコンポーネントのインポート
import './App.css';

const App = () => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const menus = [
    { id: 0, name: 'React本', price: 400 },
    { id: 1, name: 'Redux本', price: 600 },
    { id: 2, name: 'Next.js本', price: 400 }
  ];

  const handleIncrement = (index) => {
    setCounts(counts => counts.map((count, i) => i === index ? count + 1 : count));
  };

  const handleDecrement = (index) => {
    setCounts(counts => counts.map((count, i) => i === index ? Math.max(0, count - 1) : count));
  };

  const total = counts.reduce((acc, count, index) => acc + (menus[index].price * count), 0);

  return (
    <div className="app">
      <h1>My React App</h1>
      <ul className="menus">
        {menus.map((menu, index) => (
          <Menu
            key={menu.id}
            count={counts[index]}
            name={menu.name}
            price={menu.price}
            onIncrement={() => handleIncrement(index)}
            onDecrement={() => handleDecrement(index)}
          />
        ))}
      </ul>
      <p>合計：{total}円</p>
    </div>
  );
};

export default App;
