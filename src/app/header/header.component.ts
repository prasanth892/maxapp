import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  onSelect(key: string): void {

    switch (key) {
      case 'recipe': alert('recipe');        
        break;

        case 'shopping-list': alert('shopping list');
    
      default:
        break;
    }

  }


  constructor() { }

  ngOnInit() {
  }

}
