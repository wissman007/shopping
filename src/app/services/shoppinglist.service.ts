import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";
import {ActivatedRoute, Router} from "@angular/router";
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 10),
    new Ingredient("Tomatoes", 5)
  ];




  addIngredient(ingredient: Ingredient){

      var exists = false;
      for (let ingr of this.ingredients) {
          if (ingr.name.toLowerCase() === ingredient.name.toLowerCase()){
              exists = true;
          }
      }
       if (!exists) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
       }
  }

    updateIngredient(ingredient: Ingredient, index: number){
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

   delete(ingredient: Ingredient){
       var index = 0;
       for (let ingr of this.ingredients){

           if (ingr.name.toLowerCase() === ingredient.name.toLowerCase()){
               this.ingredients.splice(index,1);
           }
           ++index ;

       }

       this.ingredientsChanged.next(this.ingredients.slice());

   }

   getIngredientByIndex(index: number){
       return this.ingredients[index];

   }
}
