'use strict';
import express from "express";
import renderer from "./src/server/middleware/renderengine";
import path from "path";

const app = express();

// root (/) should always serve our server rendered page
app.use("^/$", renderer);
app.use(express.static(path.join(__dirname, "./build")));

const binaryMimeTypes = [
    'application/javascript',
    'application/octet-stream',
    'application/xml',
    'application/pdf',
    'font/eot',
    'font/opentype',
    'font/otf',
    'image/jpeg',
    'image/png',
    'image/svg+xml',
    'text/comma-separated-values',
    'text/css',
    'text/javascript',
    'text/plain',
    'text/text',
    'text/xml'
];

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);