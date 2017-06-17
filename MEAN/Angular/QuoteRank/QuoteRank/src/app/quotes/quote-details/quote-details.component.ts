import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {
  @Input() quotes;
  @Output() deleteQuote = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quote){
    quote.rating++;
  }

  voteDown(quote){
    quote.rating--;
  }

  delete(quote){
    this.deleteQuote.emit(quote);
  }
}
