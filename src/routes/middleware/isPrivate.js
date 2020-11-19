import { useEffect } from 'react';

const IsPrivate = (component) => {
  useEffect(() => {
    console.log('is private');
  }, []);

  return component;
};

export default IsPrivate;
