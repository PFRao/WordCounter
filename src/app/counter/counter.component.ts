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
    const wordCount = event.split(' ').length;

    // For some reason, ES6 style string templating didn't work for me here; I'm using string interpolation for now
    this.message = '\"' + event + '\" has ' + wordCount + (wordCount > 1 ? ' words' : ' word');
  }

}
