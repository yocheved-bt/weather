import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qk-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {

  @Input() isLoading:boolean;

}
