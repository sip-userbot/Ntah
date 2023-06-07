import React from 'react';

import { rhythm } from '../utils/typography';

class Footer extends React.Component {
  render() {
    return (
      <footer
        style={{
          marginTop: rhythm(2.5),
          paddingTop: rhythm(1),
        }}
      >
        <div style={{ float: 'right' }}>
          <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
            rss
          </a>
        </div>
        <a
          href="https://instagram.com/mr_shicy"
          target="_blank"
          rel="noopener noreferrer"
        >
          instagram
        </a>{' '}
        &bull;{' '}
        <a
          href="https://youtube.com/@Shicy-Ubot"
          target="_blank"
          rel="noopener noreferrer"
        >
          youtube
        </a>{' '}
        &bull;{' '}
        <a
          href="https://ahmadrosif.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          my website
        </a>
      </footer>
    );
  }
}

export default Footer;
