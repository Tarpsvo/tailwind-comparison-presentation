import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react';
import tailwindStyles from './styles/app.css';

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
      href: tailwindStyles,
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
      <body className="bg-medium-brown min-w-[320px] flex flex-col items-center justify-center min-h-screen antialiased px-10">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
