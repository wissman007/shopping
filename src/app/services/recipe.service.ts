import {Recipe} from '../recipes/models/recipe.model';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from './shoppinglist.service';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';


@Injectable()
export class RecipeService {
  recipeSelected : Recipe;
  private recipes: Recipe[] = [
    new Recipe(0,'A test recipe A','This a A Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Banana',20), new Ingredient('The',12)]),
    new Recipe(1,'A test recipe B','This a B Test','https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [new Ingredient('Coffee',10), new Ingredient('Sugar',52)])
  ];

  recipesChanged = new Subject<Recipe[]>();

  constructor(private shoppingListService: ShoppingListService, private http: Http){}


  getRecipes(){
   return this.recipes;
    // this.getHttpRecipes()
    //   .subscribe(
    //     (response: Response) => {
    //       console.log(response.json());
    //       return this.recipes;
    //     }
    // );
  }

  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }
  addIngredients(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }


  getRecipe(index: number){
    return this.recipes[index];

  }

  updateRecipe(index: number, recipe: Recipe){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice())
  }
  saveRecipe(recipe: Recipe){
    this.recipes.push(recipe);
    this.http.put('https://ng-recipe-book-1873e.firebaseio.com/data.json', this.recipes)
      .subscribe(

        (response: Response) => console.log(response)

      );


    this.recipesChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number){
    this.recipes.splice(index,1);
    this.recipesChanged.next(this.recipes.slice())

  }

  getHttpRecipes(){
    return this.http.get('https://ng-recipe-book-1873e.firebaseio.com/data.json')
      .map(

        (response: Response) => {
          console.log(response.json());
          return response.json();
        }

      );
  }
}
