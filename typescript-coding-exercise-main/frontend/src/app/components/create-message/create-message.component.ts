import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { MessageService } from '../../services/message.service';
import { Message } from '../../models/message.model';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-create-message',
  standalone: true,
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.css'],
  imports: [ReactiveFormsModule, FormsModule, MessageComponent, NgIf, NgClass]
})
export class CreateMessageComponent {
  message: Message = new Message('', 'draft');
  previewNumber: number = 0; // Define previewNumber

  constructor(private messageService: MessageService) {}

  

  // async onSubmit() {
  //   this.message.status = 'pending';
  //   const res = await fetch('http://localhost:3000/messages/send', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ text: this.message.text }),
  //   });
  //   if (res.ok) {
  //     this.message.status = 'sent';
  //   } else {
  //     this.message.status = 'failed';
  //   }
  //   await this.messageService.add(this.message);
  //   this.message = new Message('', 'draft');
  // }
  async onSubmit() {
    this.message.status = 'pending';
    try {
      const res = await fetch('http://localhost:3000/messages/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: this.message.text,
          user: 'exampleUser'  // Ensure this matches what your backend expects
        }),
      });

      if (res.ok) {
        this.message.status = 'sent';
        console.log(this.message.text);
      } else {
        this.message.status = 'failed';
      }

      await this.messageService.add(this.message);
      this.message = new Message('', 'draft');
    } catch (error) {
      console.error('Error sending message:', error);
      this.message.status = 'failed';
    }
  }
  
}

