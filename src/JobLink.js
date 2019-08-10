import React from 'react';

export default function JobLink({ href, text, target }) {
  return (
    <div className='button'>
      <a href={href} target={target}>
        {text}
      </a>
    </div>
  );
}
