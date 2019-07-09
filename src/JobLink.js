import React from 'react';

export default function JobLink({ href, text, target }) {
  return (
    <div>
      <a href={href} target={target}>
        {text}
      </a>
    </div>
  );
}
