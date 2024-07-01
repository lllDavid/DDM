import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  AfterContentInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chatfenster',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, HttpClientModule],
  templateUrl: './chatfenster.component.html',
  styleUrl: './chatfenster.component.scss',
  providers: [ChatService],
})
export class ChatfensterComponent implements AfterViewInit {
  @ViewChild('chatMessages', { static: false })
  private chatMessagesContainer!: ElementRef;

  messages: { content: string; from: string }[] = [];
  newMessage: string = '';

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.loadMessages();
  }

  ngAfterViewInit(): void {
    this.scrollToBottom(false);
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, from: 'user' });
      this.saveMessages();
      this.chatMessagesContainer.nativeElement.scrollTop =
        this.chatMessagesContainer.nativeElement.scrollHeight;

      this.chatService
        .sendMessage(this.newMessage, this.makeHistory())
        .subscribe(
          (response) => {
            this.messages.push({ content: response.answer, from: 'bot' });
            this.saveMessages();
            this.newMessage = '';
            this.scrollToBottom(true);
          },
          (error) => {
            console.error('Error sending message', error);
            this.messages.push({
              content: 'Error: Could not send message',
              from: 'bot',
            });
            this.saveMessages();
            this.scrollToBottom(true);
          }
        );

      this.newMessage = '';
    }
    const sloganElement = document.getElementById("slogan") as HTMLElement | null;  // Hides text above chat on message
    if (sloganElement) {
      sloganElement.style.display = "none";
    }

  }

  makeHistory(): string[] {
    let tempList = [];
    for (let i = 0; i < this.messages.length; i++) {
      tempList.push(this.messages[i].content);
    }
    return tempList;
  }

  private async scrollToBottom(bot: boolean): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, 50));
    let botMessages = document.getElementsByClassName('bot-message');
    let last = botMessages[botMessages.length - 1] as HTMLDivElement;

    let height = this.chatMessagesContainer.nativeElement.scrollHeight;

    if (bot) {
      height -= last.clientHeight;
    }

    try {
      this.chatMessagesContainer.nativeElement.scrollTop = height;
    } catch (err) {
      console.error('Scroll to bottom failed', err);
    }
  }

  private saveMessages(): void {
    localStorage.setItem('chatMessages', JSON.stringify(this.messages));
  }

  private loadMessages(): void {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      this.messages = JSON.parse(savedMessages);
    }
  }

  playAudio(text: string) {
    fetch('https://ddmbot.de/api/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        const base64string = json.audio_base64;
        const audio = new Audio('data:audio/mp3;base64,' + base64string);
        audio.play();
      });
  }
}
