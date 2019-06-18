import React from 'react';

const MenuItem = ({ app, onSelect }) => {
  return (
    <div
      key={app.title}
      style={{ margin: '0 15px', lineHeight: '60px' }}
      onClick={() => onSelect(app)}
    >
      {app.title}
    </div>
  );
};

export default MenuItem;
