import { Logger, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import * as firebase from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { print } from 'graphql';
import * as serviceAccount from './firebaseServiceAccount.json';

const firebase_params: ServiceAccount = {
  projectId: serviceAccount.project_id,
  clientEmail: serviceAccount.client_email,
  privateKey: serviceAccount.private_key,
};

export class PreAuthMiddleware implements NestMiddleware {
  private defaultApp: any;

  constructor() {
    try {
      this.defaultApp = firebase.initializeApp({
        credential: firebase.credential.cert(firebase_params),
        databaseURL: 'https://rabit-a23c1.firebaseio.com',
      });
    } catch (error) {
      print(error);
    } // Initialize firebase app
  }

  use(req: Request, res: Response, next: Function) {
    // Get the ID token passed and the CSRF token.
    const idToken = req.headers.authorization;

    Logger.log('idToken: ' + idToken.replace('Bearer', ''));

    //log the default firebase app
    Logger.log('defaultApp: ' + this.defaultApp.auth());

    if (idToken != null || idToken != '') {
      this.defaultApp
        .auth()
        .verifyIdToken(idToken.replace('Bearer', '').trim())
        .then(async (decodedToken) => {
          const user = {
            email: decodedToken.email,
            uid: decodedToken.uid,
            name: decodedToken.name,
          };
          req['user'] = user;
          Logger.log('user: ' + JSON.stringify(user));
          next();
        })
        .catch((error) => {
          Logger.error('error: ' + error);
          res.status(401).send('Unauthorized');
        });
    }

    next();
  }
}
