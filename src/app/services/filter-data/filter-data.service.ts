import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterDataService {
  note = new BehaviorSubject<string>('');
  getNote = this.note.asObservable();
  
  strength = new BehaviorSubject<string>('');
  getStrength = this.strength.asObservable();
  constructor() { }

  async updateNote(noteBaru: string) {
    this.note.next(noteBaru)
  }

  async updateStrength(strengthBaru: string) {
    this.strength.next(strengthBaru)
  }
}
