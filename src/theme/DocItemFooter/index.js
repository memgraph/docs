 import React from 'react';
 import DocItemFooterOriginal from '@theme-original/DocItemFooter';
 import DocsRating from '../../components/docs-rating/docs-rating';

 export default function DocItemFooter(props) {
   return (
     <>
       <DocsRating label={props.content.metadata.unversionedId} />
       <DocItemFooterOriginal {...props} />
     </>
   );
 }