import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/*export class MessageService {*/

export class MessageService {
  messages: string[] = [];
  private messageService: any;

  add(message: string) {
    this.messages.push(message);
  }

  /*Очистка массива сообщений*/
  clear() {
    this.messages = [];
  }
  

  constructor() { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
