// src/components/MagicButton.js
import React from 'react';
import { FaWandMagicSparkles } from 'react-icons/fa6';

const MagicButton = ({ onToggle }) => {
  return (
    <button
      onClick={() => onToggle(prev => !prev)}
      className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
    >
      <FaWandMagicSparkles size={20} />
    </button>
  );
};

export default MagicButton;
