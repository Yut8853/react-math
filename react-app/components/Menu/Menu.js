import React from 'react';
import './Menu.css'; // スタイルシートのインポート

const Menu = ({ onIncrement, onDecrement, name, price, count }) => (
  <li className="menus">
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement} disabled={count <= 0}>-</button>
    {name} ({price}円 X {count}個 = {price * count}円)
  </li>
);

export default Menu;