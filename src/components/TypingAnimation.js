import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const TypingAnimation = ({ phrases, typingSpeed, deletingSpeed }) => {
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const typePhrase = async () => {
      const currentPhrase = phrases[phraseIndex];

      for (let i = 0; i < currentPhrase.length; i++) {
        if (isDeleting) {
          await sleep(deletingSpeed);
          setText(currentPhrase.slice(0, currentPhrase.length - i));
        } else {
          await sleep(typingSpeed);
          setText(currentPhrase.slice(0, i + 1));
        }
      }

      setIsDeleting(!isDeleting);

      if (isDeleting) {
        setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      }
    };

    typePhrase();
  }, [isDeleting]);

  return <span>{text}</span>;
};

TypingAnimation.propTypes = {
  phrases: PropTypes.arrayOf(PropTypes.string).isRequired,
  typingSpeed: PropTypes.number.isRequired,
  deletingSpeed: PropTypes.number.isRequired,
};

export default TypingAnimation;
