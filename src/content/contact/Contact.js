import * as React from 'react';

import Link from '../../components/link/Link';
import Instagram from '../../components/svg/Instagram';
import Youtube from '../../components/svg/Youtube';
import LinkedIn from '../../components/svg/LinkedIn';
import Resume from '../../components/svg/Resume';
import Twitter from '../../components/svg/Twitter';
import Mail from '../../components/svg/Mail';

import { contact, links } from './Contact-emotion';

const Contact = () => {
  const time = new Date().getTime();

  return (
    <div className={contact}>
      <div className={links}>
        <Link href={`https://www.instagram.com/channgief?time=${time}`}>
          <Instagram width={50} />
          <span>@Channgief</span>
        </Link>
        <Link href={`https://www.youtube.com/channfree?time=${time}`}>
          <Youtube width={70} />
          <span>Channgief</span>
        </Link>
        <Link href={`https://www.twitter.com/channfree?time=${time}`}>
          <Twitter width={60} />
          <span>@Channfree</span>
        </Link>
        <Link href={`https://www.linkedin.com/in/codyhann?time=${time}`}>
          <LinkedIn width={50} />
        </Link>
        <Link
          href={`mailto:channfree@gmail.com?Subject=Hi%20Cody&time=${time}`}
          noTarget
        >
          <Mail width={65} />
        </Link>
        <Link>
          <Resume width={40} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
