import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/error-handling/app-error-handler';
import { LoginFormComponent } from './login-form/login-form.component';
import { PostComponent } from './post/post.component';
import { ReactiveLoginFormComponent } from './reactive-login-form/reactive-login-form.component';
import { ToTitlecasePipe } from './common/pipes/to-titlecase.pipe';
import { ChildCommunicationComponent } from './child-communication/child-communication.component';
import { SogetiCommonModule } from './sogeti-common/sogeti-common.module';
import { DataService } from './sogeti-common/services/data.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PostComponent,
    ReactiveLoginFormComponent,
    ToTitlecasePipe,
    ChildCommunicationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    SogetiCommonModule
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler},
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
