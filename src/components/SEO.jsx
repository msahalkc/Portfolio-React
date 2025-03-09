import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // Update title
    document.title = title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = description;

    // Update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = keywords;

    return () => {
      // Reset title on unmount
      document.title = 'Muhammed Sahal K C';
    };
  }, [title, description, keywords]);

  return null;
};

export default SEO;
