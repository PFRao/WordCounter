import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  message = '';

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event) {
    // I'm assuming that spaces alone are used to denote separation of words
    // I'm also assuming that puncuation on its own counts as a word
    // I'm also assuming that spaces only counts as empty text
    if (event.replace(/\s/g, '').length) {
      const wordCount = event.trim().split(/\s+/).length;
      // For some reason, ES6 style string templating didn't work for me here; I'm using string interpolation for now
      this.message = '\"' + event + '\" has ' + wordCount + (wordCount > 1 ? ' words' : ' word');
    } else {
      this.message = 'Error: no text was entered';
    }
  }

}
