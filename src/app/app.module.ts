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
import {DropDownDirective} from "./shared/dropdown.directive";
import {ShoppingListService} from "./services/shoppinglist.service";

import { RecipeNewComponent } from './recipes/recipe-new/recipe-new.component';
import {AppRoutingModule} from './app.routing.module';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { ShoppingStartComponent } from './shoppingList/shopping-start/shopping-start.component';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListEditComponent,

    HeaderComponent,

    RecipesComponent,

    RecipeListComponent,

    RecipeEditComponent,

    RecipeListItemComponent,
    DropDownDirective,
    RecipeNewComponent,
    PagenotfoundComponent,
    RecipeStartComponent,
    ShoppingStartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
