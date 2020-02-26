import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export function remoteAPI() {
  return "http://localhost:5000/"
}
const providers = [
  { provide:'BASE_URL', useFactory: remoteAPI , deps:[] }
];
platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.error(err));
