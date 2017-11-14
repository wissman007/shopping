import { Component, OnInit } from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormGroup, FormControl, FormArray, Validators} from "@angular/forms";
import {RecipeService} from "../../services/recipe.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-recipe-edit-final',
  templateUrl: './recipe-edit-final.component.html',
  styleUrls: ['./recipe-edit-final.component.css']
})
export class RecipeEditFinalComponent implements OnInit {

  recipeEdited: Recipe;
  editMode: boolean = false;
  idEdit: number;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService ) { }

  ngOnInit() {


      this.route.params
        .subscribe(
          (params: Params) => {
            this.idEdit = +params['id'];
            this.editMode = params['id'] != null;
            this.initRecipeForm();
          }
        );
  }

  /**
   * Method for initializing recipe form for editing and creating a new one
   */
  initRecipeForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients  = new FormArray([]);
    if(this.editMode){
      this.recipeEdited = this.recipeService.getRecipe(this.idEdit);
      recipeName = this.recipeEdited.name;
      recipeImagePath = this.recipeEdited.imagePath;
      recipeDescription = this.recipeEdited.description;
      if (this.recipeEdited['ingredients']) {
        for (let ingredient of this.recipeEdited.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name, Validators.required),
              'amount': new FormControl(ingredient.amount,
                [
                  Validators.required,
                  Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });

  }

  onSubmit(){
    console.log(this.recipeForm);
    if(this.editMode){
      this.recipeService.updateRecipe(this.idEdit, this.recipeForm.value)
    }
    else {
      this.recipeService.saveRecipe(this.recipeForm.value);
      this.editMode = true;

    }
    this.onCancel();
  }


  onCancel(){
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup ({
        'name': new FormControl(null, Validators.required ),
        'amount': new FormControl(null,
          [
            Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
    })
    );
  }

  onDeleteIngredient(i: any){
    console.log(i);
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(i);
  }


}
