import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestDirService {

  getItems(): string[] {
    return ["item1", "item2","item3"]
  }

}
