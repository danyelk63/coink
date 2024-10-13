import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  get(key: string): any {
    try {
      let data = localStorage.getItem(key);
      if(data) {
        return JSON.parse(data);
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  }

  save(key: string, data: any): boolean {
    try {
      localStorage.setItem(key, JSON.stringify(data));
      return true;
    } catch (error) {
      return false;
    }
  }

  remove(key: string): boolean {
    try {
    localStorage.removeItem(key);
    return true
    } catch (error) {
      return false
    }
  }
}
