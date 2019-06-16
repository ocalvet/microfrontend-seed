import React from 'react';

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
        <div
          style={{ margin: '0 15px', lineHeight: '60px' }}
          onClick={() => onSelect(app)}
        >
          {app.title}
        </div>
      ))}
    </div>
  );
};

export default Menu;
