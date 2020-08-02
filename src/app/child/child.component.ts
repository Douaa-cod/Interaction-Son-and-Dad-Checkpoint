import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  myFavoriteColor = "yellow"
  @Output() eventSendData = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
    console.log("favorite color is "+this.myFavoriteColor)
  }
  sendDataSonFather(){
    this.eventSendData.emit(this.myFavoriteColor)
  }

}
