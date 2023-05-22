import React from 'react';

const VideoBySide = ({ children, videoSrc }) => {
  const containerRef = React.useRef(null);

  // Calculate the height based on the width of the container
  React.useEffect(() => {
    const updateHeight = () => {
      const containerWidth = containerRef.current.offsetWidth;
      const aspectRatio = 9 / 16; // Adjust the aspect ratio as needed

      const calculatedHeight = containerWidth * aspectRatio;
      containerRef.current.style.height = `${calculatedHeight}px`;
    };

    // Call the updateHeight function initially and on window resize
    window.addEventListener('resize', updateHeight);
    updateHeight();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ flex: '0 1 60%' }}>
        {children}
      </div>
      <div style={{ flex: '0 1 35%', position: 'relative' }} ref={containerRef}>
        <div style={{ paddingBottom: '56.25%', position: 'relative' }}>
          <iframe
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            src={videoSrc}
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default VideoBySide;
