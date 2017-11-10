
import {Component, OnInit, ViewChild, Input, OnDestroy} from "@angular/core";
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../../services/shoppinglist.service";
import { NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {isUndefined} from "util";
@Component({
  selector: 'shoppingListEdit-app',
  templateUrl: './shoppingListEdit.component.html',
  styleUrls: ['./shoppingListEdit.component.css']


})
export class ShoppingListEditComponent implements OnInit, OnDestroy {

  ingred: Ingredient;
  editedIngredient : Ingredient;
  isSelected = false;
  subscription: Subscription;
  selectedId: number;
  editedIndex: number;
  constructor(private route: ActivatedRoute, private router: Router  ,private shoppingListService: ShoppingListService){}

  ngOnInit(){

    console.log('init ShoppingListEditComponent');

   this.subscription = this.shoppingListService.startedEditing.
   subscribe(
    (index: number)=> {
      this.editedIngredient = this.shoppingListService.getIngredientByIndex(index);
        this.editedIndex = index;
        this.isSelected = true;
    }
   );

    // this.selectedId = this.route.snapshot.params['id'];
    // this.editedIngredient = this.shoppingListService.getIngredientByIndex(this.selectedId );
    // console.log(this.selectedId);


    //   this.route.params
    //     .subscribe(
    //          (params: Params) => {
    //         this.selectedId = +params['id'];
    //              this.editedIngredient = this.shoppingListService.getIngredientByIndex(this.selectedId );
    //              console.log(this.editedIngredient);
    //              this.isSelected = true;
    //     }
    // );

  }

    onUpdateIngredient(editedIngredient: Ingredient,form: NgForm){
        editedIngredient.name = form.value.name;
        editedIngredient.amount = form.value.amount;

        this.shoppingListService.updateIngredient(editedIngredient, this.editedIndex);
        this.router.navigate(['/shopping-list'], {relativeTo: this.route});



    }
  onAddIngredient(form: NgForm){
    console.log(form);

    this.ingred = new Ingredient(form.value.name,+form.value.amount);
    this.shoppingListService.addIngredient(this.ingred);
      this.router.navigate(['/shopping-list'], {relativeTo: this.route});

  }

  onClear(form: NgForm){
    this.isSelected = false;
    form.reset();
  }
  onDelete(editedIngredient: Ingredient, form: NgForm){

    this.shoppingListService.delete(editedIngredient);
    this.router.navigate(['/shopping-list'], {relativeTo: this.route});
      if( this.shoppingListService.getIngredients().length===0){
          this.isSelected = false;
      }

    form.reset();
  }

  isDisabled(){

      return (isUndefined(this.editedIngredient)  || this.shoppingListService.getIngredients().length===0);
  }
  ngOnDestroy(){
   this.subscription.unsubscribe();
  }
}
