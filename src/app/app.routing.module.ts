import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RecipesComponent} from './recipes/recipes.component';
import {ShoppingListComponent} from "./shoppingList/shoppingList.component";
import {PagenotfoundComponent} from "./pagenotfound/pagenotfound.component";
import {RecipeEditComponent} from "./recipes/recipe-edit/recipe-edit.component";
import {RecipeNewComponent} from "./recipes/recipe-new/recipe-new.component";
import {RecipeStartComponent} from './recipes/recipe-start/recipe-start.component';
import {ShoppingListEditComponent} from "./shoppingList/shoppingListEdit/shoppingListEdit.component";
import {ShoppingStartComponent} from "./shoppingList/shopping-start/shopping-start.component";

const appRoutes: Routes = [
   {path: 'recipes', component: RecipesComponent, children: [
     {path: '', component: RecipeStartComponent},
     {path: 'new', component: RecipeNewComponent},
     {path: ':id', component: RecipeEditComponent},
     {path: ':id/edit', component: RecipeNewComponent}


   ] },
   {path: 'shopping-list', component: ShoppingListComponent, children: [
       {path: '', component: ShoppingStartComponent},
       {path: ':id', component: ShoppingListEditComponent }

   ]},
   {path: '**', component: PagenotfoundComponent },
   {path: '', redirectTo: '/recipes', pathMatch: 'full'}
];

@NgModule({

  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]

})

export class AppRoutingModule{

}
