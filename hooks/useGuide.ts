import React, { useState } from 'react';

const useGuide = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleGuideOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleGuideClose = () => {
    setIsOpen(false);
  };

  return { isOpen, handleGuideOpen, handleGuideClose };
};

export default useGuide;
