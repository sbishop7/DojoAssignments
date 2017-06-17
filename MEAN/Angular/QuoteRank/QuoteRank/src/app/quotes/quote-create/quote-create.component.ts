import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quote-create',
  templateUrl: './quote-create.component.html',
  styleUrls: ['./quote-create.component.css']
})
export class QuoteCreateComponent implements OnInit {
  @Input() quotes;
  @Output() createQuote = new EventEmitter();

  newQuote = {
    text: "",
    author: "",
    rating: 0
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.createQuote.emit(this.newQuote);
    this.newQuote = {
      text: "",
      author: "",
      rating: 0
    }
  }

}
