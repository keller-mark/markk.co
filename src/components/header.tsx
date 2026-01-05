'use client';

import { Link } from 'waku';
import { useCallback, useRef } from 'react';

export const Header = () => {

  const emailRef = useRef(null);

  const handleEmailClick = useCallback((e: any) => {
    e.preventDefault();
    if (emailRef.current) {
      emailRef.current.innerHTML = 'mark_keller[at]hms.harvard.edu';
      emailRef.current.style.textDecoration = 'none';
      emailRef.current.style.fontWeight = 'bold';
      emailRef.current.style.cursor = 'text';
    }
  }, [emailRef]);

  return (
    <header className="navbar bg-gradient2">
      <h2 className="name">
        <Link to="/">Mark Keller</Link>
      </h2>
      <ul className="links">
        <li>
          <Link to="/research">
            Research
          </Link>
        </li>
        <li>
          <Link to="/software">
            Software
          </Link>
        </li>
        {/*<li>
          <Link to="/blog">
            Blog
          </Link>
        </li>*/}
        <li>
          <Link to="/photos">
            Photos
          </Link>
        </li>
        <li>
          <Link to="/uses">
            /uses
          </Link>
        </li>
      </ul>
      <div className="social-spacer"/>
      <ul className="social-links">
        <li><a href="https://www.linkedin.com/in/keller-mark/">LinkedIn</a></li>
        <li><a href="https://scholar.google.com/citations?user=hnKZ5mwAAAAJ">Scholar</a></li>
        <li><a href="https://github.com/keller-mark">GitHub</a></li>
        <li><a href="https://observablehq.com/@keller-mark">Observable</a></li>
        <li><a href="https://bsky.app/profile/mkeller7.bsky.social">Bluesky</a></li>
        <li><a href="#" ref={emailRef} onClick={handleEmailClick}>Email</a></li>
      </ul>
    </header>
  );
};
