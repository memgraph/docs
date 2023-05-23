import React from 'react';

const EmbedYTVideo = ({ videoId, width = "560" }) => {
  const containerStyle = {
    position: 'relative',
    width: width,
    paddingBottom: '56.25%', /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    height: 0,
  };

  const iframeStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: '1px solid #cccccc',
  };

  return (
    <div style={containerStyle}>
      <iframe
        style={iframeStyle}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="encrypted-media; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
};

export default EmbedYTVideo;
