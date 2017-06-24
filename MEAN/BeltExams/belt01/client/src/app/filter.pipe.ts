import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(scores: any, search: string): any {
    if(!search){return scores}
    let filtered = []
    for (let score of scores){
      if (score.username.toLowerCase().includes(search.toLowerCase())|| score.score.toString().includes(search)||score.percentage.toString().includes(search)){
        filtered.push(score)
      }
    }
    return filtered
  }

}