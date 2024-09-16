import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'dev-vzeg3adrzq62hf03.us.auth0.com',
      clientId: 'Lq2K0Tgo8khawkmZ1nPG4w5iQ7CEmqot',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
