import { Component } from '@angular/core';
import { TestDirComponent } from './test-dir/test-dir.component';
import { MmHeadComponent } from "./mm-head/mm-head.component";
import { MmFooterComponent } from "./mm-footer/mm-footer.component";

@Component({
  selector: 'app-root',
  imports: [TestDirComponent, MmHeadComponent, MmFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dyvo-ranok-app';
}
