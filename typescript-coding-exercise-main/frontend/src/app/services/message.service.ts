
import { Injectable } from '@angular/core';
import { Message } from '../models/message.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'; // Ensure this import is present


@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: Message[] = [];

  async all(): Promise<void> {
    const res = await fetch('http://localhost:3000/messages');
    if (res.ok) {
      const data = await res.json();
      this.messages = data.messages.map((message: any) => new Message(message.text, message.status));
    } else {
      console.error('Failed to fetch messages:', res.statusText);
    }
  }

  getMessages(): Message[] {
    return this.messages;
  }
  

  async add(message: Message): Promise<void> {
    // Add message to the local list
    this.messages.push(message);

    // Send the message to the backend
    const res = await fetch('http://localhost:3000/messages/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: message.text, // Adjust according to your backend expectations
        user: 'exampleUser'    // Replace with actual user or other required fields
      }),
    });

    if (!res.ok) {
      console.error('Failed to send message:', res.statusText);
    }
  }
}
