import fetch from 'isomorphic-fetch';
const secureOptions = require('constants');

export default async query => {
    const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'User-Agent': 'Ryan Spoone',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        body: JSON.stringify({ query }),
        // The following is to help avoid ECONNRESET errors
        agentOptions: {
            secureProtocol: 'TLSv1_method'
        },
        secureOptions: secureOptions.SSL_OP_NO_TLSv1_2,
        ciphers: 'ECDHE-RSA-AES256-SHA:AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM',
        honorCipherOrder: true
    });

    if (response.error) {
        throw new Error(response.error);
    }

    return await response.json();
};
