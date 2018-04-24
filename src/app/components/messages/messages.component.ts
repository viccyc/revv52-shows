import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../services/messages/message.service';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //  must be public because it's being bound to in the template.
  constructor(public messageService: MessageService) { 

  }

  ngOnInit() {
  }

}
