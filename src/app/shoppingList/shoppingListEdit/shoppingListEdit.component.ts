
import {Component, OnInit, ViewChild, ElementRef, EventEmitter, Output, Input} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
@Component({
  selector: 'shoppingListEdit-app',
  templateUrl: './shoppingListEdit.component.html',
  styleUrls: ['./shoppingListEdit.component.css']


})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput')  amountInputRef : ElementRef;
  ingred: Ingredient;
  @Input() editedIngredient: Ingredient;

  @Output() addNewIngredient = new EventEmitter<Ingredient>();


  constructor(){}

  ngOnInit(){}

  addIngredient(){
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    console.log( name + ' '+ amount);

    this.ingred = new Ingredient(name,amount);
    this.addNewIngredient.emit(this.ingred);

  }

}
