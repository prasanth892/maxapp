import { Component, Input, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnChanges {

 color = 'blue';
  outputArray: { id: number, name: string, city: string };



  myServiceParent: ServerModel[] = [{ id: 1, name: 'jack' }, { id: 5, name: 'david' }];

  title = 'Venturaa App';


  receiveData(event) {

    this.outputArray = event;
    console.log('this is from app.component ' + event[1].name);
  }

  onChangeFirst(): void {

    alert('david');

  }

  ngDoCheck(): void {

    console.log('Do checked is triggered');

  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log('ng onchanges is executed');

  }

  changeColor(): void {

  this.color = 'red';

  }

}



class ServerModel {

  id: number;
  name: string;

  constructor() { }



}
