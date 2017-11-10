import {Component, OnInit, Input} from '@angular/core';
import {Recipe} from '../../models/recipe.model';


@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.css']
})
export class RecipeListItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Input() index: number


    ngOnInit() {
    }

}
