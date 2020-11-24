import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgTypedModule } from 'ng-typed';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HomepageComponent } from './main/homepage/homepage.component';
import { DanielComponentComponent } from './daniel-component/daniel-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NgTypedModule,
    // HomepageComponent,
    DanielComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
