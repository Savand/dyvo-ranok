import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDirService {

  getItems(): string[] {
    return ["Одинарна", "Двоспальна","Євро"]
  }

}
