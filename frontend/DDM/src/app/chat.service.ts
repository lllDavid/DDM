import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://ddmbot.de/api/chat'; // replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  sendMessage(message: string, history: string[]): Observable<any> {
    return this.http.post<any>(this.apiUrl, {
      message: message,
      history: history,
    });
  }
}
