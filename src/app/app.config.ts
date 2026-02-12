import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Provide Angular HttpClient configured to use the Fetch API
    provideHttpClient(withFetch()),

    // Global error listeners (optional)
    provideBrowserGlobalErrorListeners(),

    // Application routing
    provideRouter(routes),

    // Enable support for hydration (SSR or client-side hydration)
    provideClientHydration(withEventReplay())
  ]
};
