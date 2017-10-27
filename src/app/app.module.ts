import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shoppingList/shoppingList.component';
import {ShoppingListEditComponent} from "./shoppingList/shoppingListEdit/shoppingListEdit.component";
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeListItemComponent } from './recipes/recipe-list/recipe-list-item/recipe-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,
  
    HeaderComponent,
  
    RecipesComponent,
  
    RecipeListComponent,
  
    RecipeEditComponent,
  
    RecipeListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
