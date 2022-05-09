import { NgModule, Injector, Inject, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ComposeMessageComponent } from "./compose-message/compose-message.component";

import { AppRoutingModule } from "./app-routing.module";
import { HeroesModule } from "./heroes/heroes.module";
import { AuthModule } from "./auth/auth.module";
import injector from '../injector';
import { APP_BASE_HREF } from "@angular/common";
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HeroesModule,
    AuthModule,
    AppRoutingModule,
  ],
  declarations: [AppComponent, ComposeMessageComponent, PageNotFoundComponent],
  // bootstrap: [AppComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '/angular'
    }
  ]
})
export class AppModule {
  // private customName: string;

  // constructor(@Inject("customSelector") customName: any) {
  //   console.log("customName", customName);
  //   this.customName = customName;
  // }

  ngDoBootstrap(appRef: ApplicationRef) {
    // console.log("onBootstrap", this.customName);
    appRef.bootstrap(AppComponent, injector.getElement());
  }
}
