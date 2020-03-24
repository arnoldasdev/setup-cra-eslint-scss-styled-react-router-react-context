import React from 'react';
import { Anchor } from 'components/generic';
import './index.scss';

const Footer = () => (
  <div className="view-Footer">
    <div className="view-Footer-react-default-content">
      <p>Edit src/components and save to reload.</p>
      <Anchor
        className="view-Footer-anchor"
        anchor={{
          label: 'Learn React',
          href: 'https://reactjs.org',
          target: '_blank',
        }}
      />
    </div>
  </div>
);

export default Footer;
