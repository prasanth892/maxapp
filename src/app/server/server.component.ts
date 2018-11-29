import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

@Input()  myService: ServerModel[];
@Input() name: string;
  constructor() { }

  ngOnInit() {
    // console.log(this.myService);
  }

}



class ServerModel {

  id: number;
  name: string;

  constructor() { }



}
