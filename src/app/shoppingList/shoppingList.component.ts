import {Component, OnInit, OnDestroy} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../services/shoppinglist.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'shoppingList-app',
  templateUrl: './shoppingList.component.html',
  styleUrls: ['./shoppingList.component.css'],
  providers: []
})
export class ShoppingListComponent implements OnInit, OnDestroy{


  private subscription: Subscription;

  ingredients: Ingredient[];
  constructor( private shoppingListService: ShoppingListService){}
  isSelected = false;


  onEditIngredient(index: number){
    this.shoppingListService.startedEditing.next(index);
    this.isSelected = true;
  }

  ngOnInit(){
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientsChanged
      .subscribe(
        (ingredients : Ingredient[])=> {
          this.ingredients = ingredients;
        }
      );

  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}

