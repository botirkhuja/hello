import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    FruitsComponent,
    AddFruitComponent,
    EditFruitComponent,
    CustomInputComponent,
    LoginComponent,
    UnknownPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
