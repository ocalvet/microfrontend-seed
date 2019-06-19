import React from 'react';
import './Menu.css';
import MenuItem from './MenuItem';

const Menu = ({ apps, onSelect }) => {
  return (
    <div className="menu">
      {apps.map(app => (
        <MenuItem app={app} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Menu;
