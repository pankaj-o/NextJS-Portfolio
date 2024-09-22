import React, { useState, useEffect } from 'react';

// Bouncing animation timing function
function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

// Animation function
function animate({ duration, timing, draw }) {
  const start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

const AnimatedTyping = (inputText) => {
  const [text, setText] = useState(inputText);
  const [displayedText, setDisplayedText] = useState('');

  const runAnimation = () => {
    const to = text.length;
    const from = 0;

    animate({
      duration: 5000,
      timing: bounce,
      draw: (progress) => {
        const result = (to - from) * progress + from;
        setDisplayedText(text.slice(0, Math.ceil(result)));
      },
    });
  };

  return (
    <div>
      <textarea rows="5" cols="60" value={displayedText} readOnly />
      <br />
      <button onClick={runAnimation}>Run the animated typing!</button>
    </div>
  );
};

export default AnimatedTyping;
