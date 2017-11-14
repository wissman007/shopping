
import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {RecipeService} from "../services/recipe.service";
import {Recipe} from "../recipes/models/recipe.model";

import {AuthService} from "../auth/auth.service";
@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService){}

  storeRecipes(){
    return this.http.put('https://adventium-http-tp.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  fetchRecipes(){
    this.authService.getTocken();

    this.http.get('https://adventium-http-tp.firebaseio.com/recipes.json')
      .map(
        (response: Response) => {
          const recipes = response.json();
          for (let recipe of recipes){
            if (!recipe['ingredients']){
              console.log(recipe);
              recipe['ingredients']=[];
            }
          }
          return recipes;
        }

      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
          console.log(recipes);

        }
      );
  }

}
