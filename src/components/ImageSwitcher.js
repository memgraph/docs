import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext'; //docs: https://v2.docusaurus.io/docs/2.0.0-alpha.69/theme-classic#usethemecontext

const ImageSwitcher = ({className, alt,lightImageSrc, darkImageSrc}) => {
  const { isDarkTheme } = useThemeContext();

  return (
    <img className={className}
    alt={alt}
    src={isDarkTheme ? darkImageSrc : lightImageSrc} />
  )
}

export default ImageSwitcher;