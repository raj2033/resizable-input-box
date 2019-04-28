import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  width: number;
  height: number;
  color = '#03d400';

  ngOnInit() {
    // show  the initial width and height of input box
    const inputEl: HTMLElement = document.getElementById('search');
    this.width = inputEl.offsetWidth;
    this.height = inputEl.offsetHeight;
  }

  /**
   * this function sets the updated width and height of textarea, to display in template
   * the updated values are received from directive [inputResize]
   */
  calc($event) {
    this.width = $event.width;
    this.height = $event.height;
  }
}
