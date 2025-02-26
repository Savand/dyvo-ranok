import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-test-dir',
  imports: [NgFor],
  templateUrl: './test-dir.component.html',
  styleUrl: './test-dir.component.scss'
})
export class TestDirComponent {
  title = "My courses"
  items = ["item1","item2","item3"]
}
