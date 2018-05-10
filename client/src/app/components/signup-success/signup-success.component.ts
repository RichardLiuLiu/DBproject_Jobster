import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-signup-success',
  templateUrl: './signup-success.component.html',
  styleUrls: ['./signup-success.component.css']
})
export class SignupSuccessComponent implements OnInit {

  @Input() sid;

  constructor() { }

  ngOnInit() {
  }

}
