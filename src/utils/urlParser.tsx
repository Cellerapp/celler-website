import React from "react";

// Utility function to parse text and convert URLs to clickable links
export const parseTextWithLinks = (text: string): React.ReactNode => {
  // URL regex pattern that matches http/https URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
        >
          {part}
        </a>
      );
    }
    return part;
  });
};
