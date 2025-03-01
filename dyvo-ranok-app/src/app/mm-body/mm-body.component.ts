import { Component } from '@angular/core';
import { SellItemComponent } from './sell-item/sell-item.component';

@Component({
  selector: 'app-mm-body',
  imports: [SellItemComponent],
  templateUrl: './mm-body.component.html',
  styleUrl: './mm-body.component.scss',
})
export class MmBodyComponent {
  title = 'Варіанти постільної білизни';
}
