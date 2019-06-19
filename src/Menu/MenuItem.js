import React from 'react';
import './MenuItem.css';

const MenuItem = ({ app, onSelect }) => {
  return (
    <div key={app.title} className="menu-item" onClick={() => onSelect(app)}>
      {app.title}
    </div>
  );
};

export default MenuItem;
