import { Component, OnInit } from '@angular/core';
import { Ingridients } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingridients[] = [

    new Ingridients('Apple', 10),
    new Ingridients('Orange', 5),
    new Ingridients('Pineapple', 3)

  ];

  constructor() { }

  ngOnInit() {
  }




}
