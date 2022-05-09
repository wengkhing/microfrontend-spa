import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import injector from './injector';

export const mount = (customName?: any) => {
  injector.setElement(customName);
  if (!(window as any).shell && environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .catch((err: Error) => console.error(err));
};
