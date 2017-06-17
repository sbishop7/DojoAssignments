import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  all_quotes: Array<any> = [];
  quote = {
    text: "",
    author: "",
    rating: 0
  };

  constructor() {
    this.all_quotes = [{text: "One shall stand, one shall fall", author: "Optimus Prime", rating: 0},
    {text: "Didn't we just leave this party?", author: "Han Solo", rating: 0}]
   }

  ngOnInit() {
  }

  createQuote(newQuote){
    console.log("new Quote to be added is: " + newQuote)
    this.all_quotes.push(newQuote)
  }
  
  deleteQuote(quote){
    let i = this.all_quotes.indexOf(quote);
    this.all_quotes.splice(i, 1);
  }
}
