import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rm-carousel';
  perPage: number = 1;
  increasePerPage() {
    this.perPage++;
  }
  decreasePerPage() {
    this.perPage--;
  }
}
