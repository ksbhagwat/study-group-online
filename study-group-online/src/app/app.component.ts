import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<nav class="navbar">
      <!-- logo -->
      <div class="navbar-brand">
        <a class="navbar-item">
        <img alt="study-online" src="assets/Study Group_1.png" />
        </a>
      </div>
    </nav>`
})
export class AppComponent {
  title = 'study-group-online';
}

