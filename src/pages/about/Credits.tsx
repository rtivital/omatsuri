import React from 'react';

export default function Credits() {
  return (
    <div>
      <h2>Credits</h2>
      <p>Omatsuri was made possible by these awesome projects and resources:</p>
      <ul>
        <li>
          <a
            href="https://www.flaticon.com/authors/freepik"
            target="_balnk"
            rel="noopener noreferrer"
          >
            Freepik icons via Flaticon
          </a>
          &nbsp;are used for all graphics that you can find on this website. They are free and you
          can use them in your projects.
        </li>
        <li>
          <a href="https://github.com/svg/svgo" target="_balnk" rel="noopener noreferrer">
            SVGO
          </a>
          &nbsp; and{' '}
          <a
            href="https://github.com/rtivital/svgo-browser"
            target="_balnk"
            rel="noopener noreferrer"
          >
            svgo-browser
          </a>{' '}
          tools are used for SVG compression.
        </li>
        <li>
          Page dividers app was made with help of &nbsp;
          <a href="https://www.shapedivider.app/" target="_balnk" rel="noopener noreferrer">
            shapedivider.app
          </a>
          .&nbsp; Check it out for more awesome dividers.
        </li>
      </ul>
    </div>
  );
}
