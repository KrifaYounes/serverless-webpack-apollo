import React from 'react'
import fetch from 'node-fetch';
import {createHttpLink } from 'apollo-link-http';
import {ApolloClient } from 'apollo-client';
import {renderToStringWithData, ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ServerStyleSheet } from 'styled-components';
import Html from '../Html';
import App from "../../App";
const path = require("path");
const fs = require("fs");
var pdf = require('html-pdf');

export default (req, res, next) => {
    const client = new ApolloClient({
        ssrMode: true,
        link: createHttpLink({ uri: 'http://localhost:8081/graphql', fetch: fetch }),
        cache: new InMemoryCache()
    });

    const app = (
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    );

    const title = 'Server side Rendering with Styled Components';
    const sheet = new ServerStyleSheet();
    const filePath = path.resolve("./build", "index.html");

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        } else {

            renderToStringWithData(sheet.collectStyles(app)).then((body) => {
                res.status(200);
                const styles = sheet.getStyleTags();

                var options = { format: 'A4', orientation: 'portrait',zoomFactor: 0.25 };

                pdf.create(Html({
                    body,
                    styles,
                    title
                })).toStream(function (err, stream) {
                    if (err) {
                        console.error('RENDERING ERROR:', err);
                        res.status(500);
                        res.end(err);

                    } else {
                        res.contentType("application/pdf");
                        stream.pipe(res);
                    }
                });

            }).catch(e => {
                console.error('RENDERING ERROR:', e);
                res.status(500);
                res.end(`An error occurred with the following stack trace:\n\n${e.stack}`);
            });
        }
    });
}