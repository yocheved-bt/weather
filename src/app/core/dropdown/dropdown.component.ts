import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
// import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DDList } from '../../types'

@Component({
  selector: 'qk-dropdown',
  template: `<select class="form-control selcls"  (ngModelChange)="onChange($event)" [(ngModel)]="defualtValue">
             <option disabled selected>Select a {{title}}</option>
             <option *ngFor="let item of list" [ngValue]="item">  {{item.name}} </option>
             </select>`,
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  @Input() list: DDList[];
  @Input() defualtValue: any;
  @Input() title: string;
  @Input() type: string;

  @Output() change: EventEmitter<any> = new EventEmitter<any>();

setDefualtVal(){
  var index = this.list.map(function(x) {return x.id; }).indexOf(this.defualtValue.id);
  this.defualtValue = this.list[index];
}
  ngOnInit(): void {
    this.setDefualtVal();

  }

  onChange(event: DDList,name?:string){
    this.change.emit({'event':event,"name": this.type});
}
 
}
