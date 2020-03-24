import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Layout/Header';
import Footer from 'components/Layout/Footer';
import Content from 'components/Layout/Content';

const Layout = ({ views }) => (
  <div className="Layout" data-testid="Layout">
    {views.Header && (
      <Header>
        <views.Header />
      </Header>
    )}
    {views.Content && (
      <Content>
        <views.Content />
      </Content>
    )}
    {views.Footer && (
      <Footer>
        <views.Footer />
      </Footer>
    )}
  </div>
);

export default Layout;

Layout.propTypes = {
  views: PropTypes.shape({
    Header: PropTypes.elementType,
    Content: PropTypes.elementType.isRequired,
    Footer: PropTypes.elementType,
  }).isRequired,
};

export {
  Header,
  Footer,
  Content,
};
