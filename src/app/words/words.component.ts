import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {

  @Output() submit = new EventEmitter<string>();

  words = '';

  constructor() { }

  ngOnInit() {
  }

  submitWords() {
    this.submit.emit(this.words);
  }

  clearWords() {
    this.words = '';
  }

}
