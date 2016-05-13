import React from 'react';

export default function Item({ name, popularity, image }) {
  return (
    <div className="flex flex-center mb2">
      <img src={ image }
        width="64" height="64"
        className="flex-none mr2" />
      <div className="flex-auto">
        <p className="m0">{ name }</p>
      </div>
    </div>
  );
}
