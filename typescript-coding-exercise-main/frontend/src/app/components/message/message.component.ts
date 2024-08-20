import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
//import { Message } from '../../services/message.service';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
@Component({
  selector: 'app-message',
  standalone: true,
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  imports: [NgClass]
})
export class MessageComponent {
  @Input() message!: Message;
  @Input() no!: number;
}
