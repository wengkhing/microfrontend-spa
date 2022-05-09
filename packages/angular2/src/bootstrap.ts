import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { enableProdMode } from "@angular/core";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

export const mount = (customName?: any) => {
  if (!(window as any).shell && environment.production) {
    enableProdMode();
  }

  platformBrowserDynamic([{ provide: "customSelector", useValue: customName }])
    .bootstrapModule(AppModule)
    .catch((err: Error) => console.error(err));
};
