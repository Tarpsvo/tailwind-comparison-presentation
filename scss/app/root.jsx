import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import appStyles from '../styles/app.css';

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
    {
      rel: 'stylesheet',
      href: appStyles,
    },
  ];
};

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
