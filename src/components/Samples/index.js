import React from 'react';
import { Row } from 'components/generic';
import Auth from 'components/Samples/Auth';
import SCSS from 'components/Samples/SCSS';
import StyledComponent from 'components/Samples/StyledComponent';

const Samples = () => (
  <div className="Samples">
    <Row cols={1} className="ta-center">
      <Auth />
    </Row>
    <Row cols={2}>
      <SCSS
        content={{
          text: 'Sample: SCSS-component',
        }}
        anchor={{
          label: 'Learn More',
          href: 'https://sass-lang.com/',
          target: '_blank',
        }}
      />
      <StyledComponent
        content={{
          text: 'Sample: styled-component',
        }}
        anchor={{
          label: 'Learn More',
          href: 'https://styled-components.com/',
          target: '_blank',
        }}
      />
    </Row>
  </div>
);

export default Samples;

export {
  Auth,
  SCSS,
  StyledComponent,
};
