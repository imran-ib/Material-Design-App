import React from 'react';
import Head from 'next/head';

interface Props {
  pageTitle?: string;
}

const Meta: React.FC<Props> = ({ pageTitle = `Material` }) => (
  <Head>
    <meta name="viewport" content="viewport-fit=cover" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />

    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    <title>{pageTitle}</title>
  </Head>
);

export default Meta;
