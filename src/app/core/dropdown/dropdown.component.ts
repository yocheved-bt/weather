import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DDList } from '../../types'

@Component({
  selector: 'qk-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() list: DDList ;
  @Input() title: string;
  @Output() change: EventEmitter<DDList> = new EventEmitter<DDList>();

  selectedValue: DDList;

  //constructor() { }

  ngOnInit(): void {
    this.selectedValue = this.list[0];

  }

  
 // form = new FormGroup({
   // dropdown: new FormControl('', Validators.required)
  //});
  
 // get f(){
   // return this.form.controls;
  //}
  onChange(event: DDList){
   // console.log("---------->>>>",event);
    this.change.emit(event);

}
  
 
}
