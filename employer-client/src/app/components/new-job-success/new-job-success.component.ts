import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-job-success',
  templateUrl: './new-job-success.component.html',
  styleUrls: ['./new-job-success.component.css']
})
export class NewJobSuccessComponent implements OnInit {

  @Input() jid: string;

  constructor() { }

  ngOnInit() {
  }

}
