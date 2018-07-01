import * as React from 'react';

import Link from '../../components/link/Link';
import Instagram from '../../components/svg/Instagram';
import Youtube from '../../components/svg/Youtube';
import LinkedIn from '../../components/svg/LinkedIn';
import Resume from '../../components/svg/Resume';
import Twitter from '../../components/svg/Twitter';

import { contact, links } from './Contact-emotion';

const Contact = () => {
  const time = new Date().getTime();

  return (
    <div className={contact}>
      <div className={links}>
        <Link href={`https://www.instagram.com/channgief?time=${time}`}>
          <span className="svg">
            <Instagram />
          </span>
          <span>@Channgief</span>
        </Link>
        <Link href={`https://www.youtube.com/channfree?time=${time}`}>
          <span className="svg">
            <Youtube />
          </span>
          <span>Channgief</span>
        </Link>
        <Link href={`https://www.linkedin.com/in/codyhann?time=${time}`}>
          <span className="svg">
            <LinkedIn />
          </span>
        </Link>
        <Link>
          <span className="svg">
            <Resume />
          </span>
          <span>Resumé</span>
        </Link>
        <Link href={`https://www.twitter.com/channfree?time=${time}`}>
          <span className="svg">
            <Twitter />
          </span>
          <span>@Channfree</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
