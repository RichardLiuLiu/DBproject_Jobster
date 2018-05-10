import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-new-message-list',
  templateUrl: './new-message-list.component.html',
  styleUrls: ['./new-message-list.component.css']
})
export class NewMessageListComponent implements OnInit {

  me: string = this.auth.getSid();
  
  messages: any;
  flag: boolean = false;

  constructor(private auth: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.getNewMessages(this.me);
  }

  getNewMessages(me: string) {
    this.messageService.getNewMessageList(me)
      .then(messages => {
        if (messages.length === 0) {
          this.flag = true;
        }
        this.messages = messages;
      });
  }

}
