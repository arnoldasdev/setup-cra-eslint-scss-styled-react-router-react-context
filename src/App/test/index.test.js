import React from 'react';
import { render, cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import { ContextAuth } from 'store-context/auth/Auth';
import Provider from 'store-context/Provider';
import App from '..';

afterEach(cleanup);

describe('[main]', () => {
  describe('User-is-Authenticated', () => {
    it('<App /> renders-correctly', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: true }}>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      expect(app).toBeInstanceOf(HTMLDivElement);
    });

    it('<Layout /> is-in-the <App />', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: true }}>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      const layout = getByTestId('Layout');
      expect(app.firstChild).toEqual(layout);
    });

    it('<Header />, <Content />, <Footer /> is-in-the <Layout />', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: true }}>
          <App />
        </Provider>,
      );

      const layout = getByTestId('Layout');
      const header = getByTestId('Header');
      const content = getByTestId('Content');
      const footer = getByTestId('Footer');

      [header, content, footer].forEach((child, i) => expect(child).toEqual(layout.children[i]));
    });
  });

  describe('User-is-not-Authenticated', () => {
    it('<App /> renders-correctly', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: false }}>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      expect(app).toBeInstanceOf(HTMLDivElement);
    });

    it('<Layout /> is-in-the <App />', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: false }}>
          <App />
        </Provider>,
      );

      const app = getByTestId('App');
      const layout = getByTestId('Layout');
      expect(app.firstChild).toEqual(layout);
    });

    it('<Content />, <Footer /> is-in-the <Layout />', () => {
      const { getByTestId } = render(
        <Provider Context={ContextAuth} state={{ isAuthenticated: false }}>
          <App />
        </Provider>,
      );

      const layout = getByTestId('Layout');
      const content = getByTestId('Content');
      const footer = getByTestId('Footer');

      [content, footer].forEach((child, i) => expect(child).toEqual(layout.children[i]));
    });
  });
});

describe('[snapshots]', () => {
  describe('User-is-Authenticated', () => {
    it('Matches-snapshot <App>', () => {
      const tree = renderer
        .create(
          <Provider Context={ContextAuth} state={{ isAuthenticated: true }}>
            <App />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });

  describe('User-is-not-Authenticated', () => {
    it('Matches-snapshot <App>', () => {
      const tree = renderer
        .create(
          <Provider Context={ContextAuth} state={{ isAuthenticated: false }}>
            <App />
          </Provider>,
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
});
