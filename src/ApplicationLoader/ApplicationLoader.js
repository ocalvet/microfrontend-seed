import React from 'react';

const Menu = ({ app }) => {
  return (
    // Sites that can be display on the iFrame cannot  have the If trying to use any external site the
    // response headers cannot be X-Frame-Options: SAMEORIGIN
    <iframe
      style={{
        border: 'none',
        width: '100%',
        height: '1200px'
      }}
      title="application"
      src={app.link}
    />
  );
};

export default Menu;
