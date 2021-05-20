import express from 'express';
import * as admin from 'firebase-admin';
import { initializeDbConnection } from './db';
import { routes } from './routes';

// SETUP: You'll need to get this file from the Firebase console
const FIREBASE_CREDENTIALS = require('../credentials.json');

const start = async () => {
    const app = express();
    app.use(express.json());

    admin.initializeApp({
        projectId: 'react-payment-processing',
        credential: admin.credential.cert(FIREBASE_CREDENTIALS),
    });

    await initializeDbConnection();

    routes.forEach(route => {
        app[route.method](route.path, route.handler);
    });

    app.listen(8080, () => {
        console.log('Server is listening on port 8080');
    });
}

start();