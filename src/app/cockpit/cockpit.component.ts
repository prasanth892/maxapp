import { Component, OnInit, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit, OnChanges {

    word: string;
    count = 0;
    myService: ServerModel[] = [];


    sampleData = [
        { id: 1, name: 'jack', city: 'cancass' },
        { id: 2, name: 'Marshal', city: 'Lousiana' },
        { id: 3, name: 'Garcia', city: 'Denver' }
    ];

    @Output('myEventing') myEvent = new EventEmitter<{ id: number, name: string, city: string }[]>();

    passData(): void {

        this.myEvent.emit(this.sampleData);
    }


    templateFun(inputData): void {

        console.log(inputData.innerHTML);

    }


    constructor() {
        console.log('constructor is called');

    }

    ngOnInit() {
        console.log('ngOnInit is called');
        this.passData();
    }

    ngOnChanges(changes: SimpleChanges): void {

        console.log('ngOnChanges is called : ' + changes);
        
        
    }



    addServer(): void {

        this.myService.push({ id: this.count, name: 'server is added' });
        this.count++;



    }

    removeServer(id: number): void {

        this.myService.splice(id, 1);
    }


}


class ServerModel {

    id: number;
    name: string;

    constructor() { }



}
