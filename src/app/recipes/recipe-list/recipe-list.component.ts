import {Component, OnInit,OnDestroy} from '@angular/core';
import {Recipe} from '../models/recipe.model';
import {RecipeService} from '../../services/recipe.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = this.recipeService.getRecipes();
  recipesSubscription: Subscription;

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  //  getRecipes(){
  //    return this.recipeService.getRecipes();
  // }


  addNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }


  ngOnInit() {
     // this.recipes = this.recipeService.getRecipes();
    console.log(this.recipeService.getRecipes());
     this.recipesSubscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[])=> {
            this.recipes = recipes;
        }
      );
  }

  ngOnDestroy(){
    this.recipesSubscription.unsubscribe();
  }
}
