import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home-component/home-component';
import { MenuComponent } from './components/menu-component/menu-component';
import { LoginComponent } from './components/login-component/login-component';
import { FormsModule } from '@angular/forms';
import { ServiceEmpleados } from './services/service.empleados';
import { ServiceAuth } from './services/service.auth';
import { PerfilComponent } from './components/perfil-component/perfil-component';
import { SubordinadosComponent } from './components/subordinados-component/subordinados-component';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    PerfilComponent,
    SubordinadosComponent,
  ],
  imports: [FormsModule, BrowserModule, AppRoutingModule],
  providers: [ServiceEmpleados, ServiceAuth, provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
