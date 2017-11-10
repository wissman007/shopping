import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Recipe} from "../models/recipe.model";
import {RecipeService} from "../../services/recipe.service";
import {Ingredient} from "../../shared/ingredient.model";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {



  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  getRecipes(){
    return this.recipeService.getRecipes();
  }


  addNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnInit() {

  }

}
