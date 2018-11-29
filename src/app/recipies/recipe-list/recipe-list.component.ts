import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // tslint:disable-next-line:member-ordering
  recipes: Recipe[]  = [

  new Recipe('food one', 'desc one', 'https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/16:9/w_2560,c_limit/shrimp-scampi.jpg'),
  new Recipe('food two', 'desc two',
   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlh9hOFupVZmwypnYjlvKkF-c1vg_TAPU0LoUWF9yfh2auB-5aw'),
  new Recipe('food three', 'desc theree',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8hAXcR5xpJedc6sHhLp9NmyJC2rluUQAYXbEVrlhCUv3jIyE')
,
new Recipe('food one', 'desc one', 'https://assets.bonappetit.com/photos/58a4e12a9fda6d7fbc740e91/16:9/w_2560,c_limit/shrimp-scampi.jpg'),
new Recipe('food two', 'desc two',
 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQlh9hOFupVZmwypnYjlvKkF-c1vg_TAPU0LoUWF9yfh2auB-5aw'),
new Recipe('food three', 'desc theree',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8hAXcR5xpJedc6sHhLp9NmyJC2rluUQAYXbEVrlhCUv3jIyE')


  ];







}
