import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';

export const meta = () => ({
  charset: 'utf-8',
  title: 'Tailwind Test',
  viewport: 'width=device-width,initial-scale=1',
});

export const links = () => {
  return [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'precomnnect',
      href: 'https://fonts.gstatic.com',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@500;700&family=Josefin+Sans:wght@400;500;700&display=swap',
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <GlobalStyles />
        <Meta />
        <Links />
        {typeof document === 'undefined' ? '__SERVER_STYLES__' : null}
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Outlet />
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
