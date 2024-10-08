import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsSettingsComponent } from './components/bs-settings/bs-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PreviewComponent } from './components/preview/preview.component';
import { ButtonPreviewComponent } from './components/preview/button-preview/button-preview.component';

@NgModule({
  declarations: [AppComponent, BsSettingsComponent, PreviewComponent, ButtonPreviewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule { }
