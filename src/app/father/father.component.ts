import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {
  color:string;
  constructor() { }

  ngOnInit(): void {
  }
  getDataFromSon(colorFromSon){
    console.log(colorFromSon)
    this.color = colorFromSon;
    console.log(this.color)

  }

}
