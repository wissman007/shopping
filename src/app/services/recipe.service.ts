import {Recipe} from "../recipes/models/recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shoppinglist.service";
import {Injectable} from "@angular/core";

@Injectable()
export class RecipeService {
  recipeSelected : Recipe;
  private recipes: Recipe[] = [
    new Recipe(0,'A test recipe A','This a A Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Banana',20), new Ingredient('The',12)]),
    new Recipe(1,'A test recipe B','This a B Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Coffee',10), new Ingredient('Sugar',52)])
  ];

  constructor(private shoppingListService: ShoppingListService){}


  getRecipes(){
    return this.recipes.slice();
  }
  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }


  getRecipe(index: number){
    return this.recipes[index];

  }

}
