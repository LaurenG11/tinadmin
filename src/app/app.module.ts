import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Cloudinary } from '@cloudinary/angular-5.x';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MagicModule } from '@magic-xpa/angular';
import { MagicAngularMaterialModule } from '@magic-xpa/angular-material-core';
import { CloudinaryMediaModule } from './cloudinary-img-upload/cloudinary-img-upload.module'
import { MagicGenLibModule } from './magic/magic.gen.lib.module';
import { routes } from './app.routes';
import {HttpClientModule}  from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPayPalModule} from 'ngx-paypal';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';


@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MagicModule.forRoot(),
    MagicAngularMaterialModule,
    MagicGenLibModule,
    CloudinaryMediaModule,
    HttpClientModule,
    FormsModule,
    NgxPayPalModule,
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
