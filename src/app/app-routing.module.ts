import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateAccountComponent } from './create-account/create-account.component';

const routes: Routes = [{path:"",component:LoginComponent},
{path:"home", component:HomeComponent},
{path:"register", component:RegistrationComponent},{path:"login", component:LoginComponent}, 
{path:"admin", component:AdminComponent},
{path:"update/:id", component:UpdateUserComponent},
{path:"createAccount",component : CreateAccountComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
