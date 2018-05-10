import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  me: string = this.auth.getSid();
  you: string = "";
  
  messages: any;
  newMessage: string = "";
  flag: boolean = false;

  constructor(private route: ActivatedRoute,
              private auth: AuthService,
              private messageService: MessageService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.you = params['sid'];
      this.getMessages(this.me, this.you);
    });
  }

  getMessages(me: string, you: string) {
    this.messageService.getMessageList(me, you)
      .then(messages => {
        if (messages.length === 0) {
          this.flag = true;
        }
        this.messages = messages;
        for (let m of this.messages) {
          if (m.mstatus === 'unread' && m.fid === me) {
            this.updateMessageStatus(m.sid, m.fid, m.mtime);
          }
        }
      });
  }

  sendMessage(me: string, you: string, content: string) {
    if (this.newMessage) {
      this.messageService.sendMessage(me, you, content)
        .then(res => window.location.reload());
    }
  }

  updateMessageStatus(sender: string, receiver: string, mtime: string) {
    this.messageService.updateMessageStatus(sender, receiver, mtime)
      .then(res => console.log('update as read'));
  }


}
