import React from 'react';
import Head from 'next/head';


const SEO = ({
description = 'Apex security is a fictional cyber security company',
author='Jack Rigan',
meta,
title='Apex Security'
}) => {
const metaData = [
    {
        name: `description`,
        content: description,
      },
      {
        property: `og:title`,
        content: title,
      },
      {
        property: `og:description`,
        content: description,
      },
      {
        property: `og:type`,
        content: `website`,
      },
];


return (
    <Head>
        <title>{title}</title>
        {metaData.map(({name,content}, i) => (
            <meta key={index} name={name} content={content}/>
        ))}
    </Head>
);
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
}