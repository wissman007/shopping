import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {RecipeService} from "../services/recipe.service";
import {ShoppingListService} from "../services/shoppinglist.service";
import {Http, Response} from "@angular/http";
import {error} from "util";
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() featureSelected = new EventEmitter<string> ();

  isUserAuthentificated = true;
  constructor(private recipeService: RecipeService,
              private dataStorageService: DataStorageService,
              private authService: AuthService
            ) { }

  ngOnInit() {
    this.isUserAuthentificated = this.authService.isAuthentificated();
  }

  onRecipesShow(feature: string){
      console.log(feature);
      this.featureSelected.emit(feature);

  }

  onShoppingShow(feature: string){
    console.log(feature);
    this.featureSelected.emit(feature);

  }
  onSaveData(){

    this.dataStorageService.storeRecipes()
       .subscribe(
         (response: Response) => console.log(response),
         (error) => console.log(error)
       )

  }
  onFetchData(){
    this.dataStorageService.fetchRecipes();


  }
}
