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

  type = new BehaviorSubject<string>('');
  getType = this.type.asObservable();
  constructor() { }

  async updateNote(noteBaru: string) {
    this.note.next(noteBaru)
  }

  async updateStrength(strengthBaru: string) {
    this.strength.next(strengthBaru)
  }

  async updateType(tipeBaru: string) {
    this.type.next(tipeBaru)
  }
}
