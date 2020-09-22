import React from 'react';

import { HeadNav, HeadNavSection } from './index.style';

import { Link } from '../components/link';

type HeaderProps = {};

function Header(props: HeaderProps) {
  return (
    <HeadNav>
      <HeadNavSection>
        <Link light href="/">
          Home
        </Link>
        <input></input>
        <Link light href="/">
          Pulls
        </Link>
        <Link light href="/">
          Issues
        </Link>
        <Link light href="/">
          Marketplace
        </Link>
        <Link light href="/">
          Explore
        </Link>
      </HeadNavSection>
      <HeadNavSection>
        <Link light href="/">
          Notifications
        </Link>
        <Link light href="/">
          New
        </Link>
        <Link light href="/">
          Profile
        </Link>
      </HeadNavSection>
    </HeadNav>
  );
}

export { Header };
