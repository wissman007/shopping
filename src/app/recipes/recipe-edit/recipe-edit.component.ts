import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shoppinglist.service";
import {RecipeService} from "../../services/recipe.service";
import {RouterLinkActive, Route, RouterLink, Routes, ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  recipeEdit: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router  ) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeEdit = this.recipeService.getRecipe(this.id);

        }

      )
  }

  addIngredientFromRecipe(ingredients: Ingredient[]){
     this.recipeService.addIngredients(ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
