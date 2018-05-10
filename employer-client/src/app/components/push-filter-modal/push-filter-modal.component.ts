import { Component, OnInit, Input } from '@angular/core';

import { JobService } from '../../services/job.service';

declare var $: any;

const DEFAULT_FILTER = Object.freeze({
  university: "",
  degree: "BS, MS, PhD",
  major: "",
  gpa: 0,
  skill: "",
  keyword: ""
});

@Component({
  selector: 'app-push-filter-modal',
  templateUrl: './push-filter-modal.component.html',
  styleUrls: ['./push-filter-modal.component.css']
})
export class PushFilterModalComponent implements OnInit {

  @Input() jid: string;

  degrees: string[] = ['BS, MS, PhD', 'MS, PhD', 'PhD'];

  filter = Object.assign({}, DEFAULT_FILTER);

  constructor(private jobService: JobService) { }

  ngOnInit() {
  }

  sendJobNotifications(jid: string, filter: any) {
    console.log(jid);
    console.log(filter);
    this.jobService.sendJobNotifications(jid, filter)
      .then(res => $('#push-filter-modal').modal('toggle'));
    this.filter = Object.assign({}, DEFAULT_FILTER);
  }

}
