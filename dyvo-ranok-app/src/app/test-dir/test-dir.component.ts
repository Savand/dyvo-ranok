import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TestDirService } from '../test-dir.service';

@Component({
  selector: 'app-test-dir',
  imports: [NgFor],
  templateUrl: './test-dir.component.html',
  styleUrl: './test-dir.component.scss',
  providers: [TestDirService]
})
export class TestDirComponent {
  title = "Варіанти постільної білизни будуть тут"
  items!: string[];

  constructor(service: TestDirService) {
    this.items = service.getItems();
  }
}
