import { Component } from '@angular/core';
import { TestDirComponent } from './test-dir/test-dir.component';

@Component({
  selector: 'app-root',
  imports: [TestDirComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dyvo-ranok-app';
}
