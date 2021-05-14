import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home-c',
  templateUrl: './my-home-c.component.html',
  styleUrls: ['./my-home-c.component.scss']
})
export class MyHomeCComponent implements OnInit {
  myArray = []
  newItemInArray: any
  constructor() { }

  ngOnInit(): void {
    this.myArray.push({id: 1, name: 'One', value: 'one'})
  }

  addNewItemToArray(i) {
    const newObj = { id: i + 1, name: this.newItemInArray, value: this.resolveIdToName(i) }
    this.myArray.push(newObj)
    debugger
  }

  resolveIdToName(i: any) {
    if (i === 0) {
      return 'one'
    }
    if (i === 1) {
      return 'two'
    }
    if (i === 2) {
      return 'three'
    }
  }

}
