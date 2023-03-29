import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

export interface IConfiguration {
  production: boolean,
  appId: string,
  buildTime: string,
  environment: string
}
if (environment.production) {
  enableProdMode();
}

console.log('DYNAMICALLY CONFIGURED VALUES', window['__env'] as IConfiguration);

console.log('Initializing App');
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
