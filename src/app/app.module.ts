import { ButtonsComponent } from './buttons/buttons.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { IntroComponent } from './intro/intro.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/MaterialModule';
import { CompanyComponent } from './company/company.component';
import { PopupComponent } from './popup/popup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrudComponent } from './crud/crud.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    PopupComponent,
    CrudComponent,
    IntroComponent,
    SigninComponent,
    SignupComponent,
    ButtonsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
