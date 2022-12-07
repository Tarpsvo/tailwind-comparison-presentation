import { Response } from '@remix-run/node';
import { RemixServer } from '@remix-run/react';
import { renderToString } from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

export default function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new ServerStyleSheet();

  let markup = renderToString(sheet.collectStyles(<RemixServer context={remixContext} url={request.url} />));

  // styled-components
  const styles = sheet.getStyleTags();
  markup = markup.replace('__SERVER_STYLES__', styles);
  responseHeaders.set('Content-Type', 'text/html');

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: responseHeaders,
  });
}
