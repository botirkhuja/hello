import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { FruitsComponent } from './fruits/fruits.component';
import { AddFruitComponent } from './fruits/add-fruit/add-fruit.component';
import { EditFruitComponent } from './fruits/edit-fruit/edit-fruit.component';
import { Routes, RouterModule } from '@angular/router';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { UnknownPageComponent } from './unknown-page/unknown-page.component';
import { SingUpComponent } from './sing-up/sing-up.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FruitsComponent,
    AddFruitComponent,
    EditFruitComponent,
    CustomInputComponent,
    LoginComponent,
    UnknownPageComponent,
    SingUpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
