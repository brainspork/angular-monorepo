import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BannerModule, DndModule } from 'projects/shared-library/src/public-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageModule } from './pages/home-page/home-page.module';
import { MonstersPageModule } from './pages/monsters-page/monsters-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    DndModule,

    // pages
    HomePageModule,
    MonstersPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
