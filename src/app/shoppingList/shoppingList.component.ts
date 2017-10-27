import {Component, OnInit, EventEmitter, Output} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Component({
  selector: 'shoppingList-app',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css']
})
export class ShoppingListComponent implements OnInit{

  @Output() editIngredient = new EventEmitter<Ingredient>();
  viewedIng: Ingredient;
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 10),
    new Ingredient("Tomatoes", 5)
  ];


  onAddedIngredient(ingredient : Ingredient){
    this.ingredients.push(ingredient);
  }


  onEditIngredient(ing: Ingredient){
    this.viewedIng = ing;
  }



  constructor(){}

  ngOnInit(){

  }
}
