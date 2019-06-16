import React, { useState, useRef } from 'react';

const Menu = ({ app }) => {
  const [imagesCount, setCount] = useState(0);
  const iframeRef = useRef();
  window.onmessage = function(e) {
    // console.log('Application message', e);
    iframeRef.current.contentWindow.postMessage('from parent', '*');
    if (e.data && e.data.type) {
      switch (e.data.type) {
        case 'dog.image.changed':
          setCount(prevCount => prevCount + 1);
          return;
        default:
          console.log('UNKNOWN EVENT', e.data);
          return;
      }
    }
  };
  return (
    <>
      <div>Dog images {imagesCount}</div>
      {/* Sites that can be display on the iFrame cannot have the If trying to
      use any external site the response headers cannot be X-Frame-Options: SAMEORIGIN */}
      <iframe
        ref={iframeRef}
        style={{
          border: 'none',
          width: '100%',
          height: '1200px'
        }}
        title="application"
        src={app.link}
      />
    </>
  );
};

export default Menu;
