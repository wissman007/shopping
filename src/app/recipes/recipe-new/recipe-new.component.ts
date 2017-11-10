import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../services/recipe.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Recipe} from "../models/recipe.model";

@Component({
  selector: 'app-recipe-new',
  templateUrl: './recipe-new.component.html',
  styleUrls: ['./recipe-new.component.css']
})
export class RecipeNewComponent implements OnInit {

  constructor(private recipeService: RecipeService, private activatedRoute: ActivatedRoute) { }
  recipe: Recipe;
  id: number;
  editMode = false;
  ngOnInit() {
    this.activatedRoute.params
      .subscribe(
        (params: Params) => {

          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
          this.editMode = params['id'] != null;
          console.log(this.editMode);
        }
      )

  }

}
