import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ItemComponent } from './components/product/item/item.component';

const routes: Routes = [
  {path : '',redirectTo : 'home',pathMatch:'full'},
  {path : 'home',component:HomeComponent}, 

  {path : 'product',component : ProductComponent},
  {path : 'product/:id',component : ItemComponent},

//   {path : 'product',component:ProductComponent, children:[{
//     path : 'item', component : ItemComponent
//   }]
// },
  
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
