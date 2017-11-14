import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from './shoppingList/shoppingList.component';
import {PagenotfoundComponent} from './pagenotfound/pagenotfound.component';
import {RecipeEditComponent} from './recipes/recipe-edit/recipe-edit.component';
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {ShoppingListEditComponent} from './shoppingList/shoppingListEdit/shoppingListEdit.component';
import {ShoppingStartComponent} from './shoppingList/shopping-start/shopping-start.component';
import {RecipeEditFinalComponent} from './recipes/recipe-edit-final/recipe-edit-final.component';
import {SignupComponent} from "./auth/signup/signup.component";
import {SigninComponent} from "./auth/signin/signin.component";

const appRoutes: Routes = [

  {path: 'signup', component: SignupComponent },
  {path: 'signin', component: SigninComponent },
  {path: 'recipes', component: RecipesComponent, children: [
     {path: '', component: RecipeStartComponent},
     {path: 'new', component: RecipeEditFinalComponent},
     {path: ':id', component: RecipeEditComponent},
     {path: ':id/edit', component: RecipeEditFinalComponent}


   ] },
   {path: 'shopping-list', component: ShoppingListComponent, children: [
       {path: '', component: ShoppingStartComponent},
       {path: ':id', component: ShoppingListEditComponent }

   ]},

    {path: '', redirectTo: '/auth', pathMatch: 'full'},
    {path: '**', component: PagenotfoundComponent }
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule{

}
