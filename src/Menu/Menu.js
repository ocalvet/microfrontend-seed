import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ apps, onSelect }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}
    >
      {apps.map(app => (
        <MenuItem app={app} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Menu;
