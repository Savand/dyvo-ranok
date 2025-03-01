import { Component } from '@angular/core';
import { TestDirService } from '../test-dir.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mm-body',
  imports: [NgFor],
  templateUrl: './mm-body.component.html',
  styleUrl: './mm-body.component.scss',
  providers: [TestDirService]
})
export class MmBodyComponent {

    title = "Варіанти постільної білизни"
    items: string[];

    constructor(service: TestDirService) {
      this.items = service.getItems();
    }

    doAfterOnClick(_$event:MouseEvent) {
      _$event.stopPropagation;
      console.log('button clicked', _$event);
    }

}
