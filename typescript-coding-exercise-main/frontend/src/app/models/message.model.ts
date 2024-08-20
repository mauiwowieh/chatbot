// src/app/models/message.model.ts
export class Message {
    constructor(public text: string, public status: string) {}
  
    empty() {
      return this.text === '';
    }
  }
  