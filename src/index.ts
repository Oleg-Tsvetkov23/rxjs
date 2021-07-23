import {of, from, timer, range} from 'rxjs';
import { Observable } from 'rxjs';
import * as fetch from 'node-fetch';
import "dotenv/config";

const o = range(0, 10)

o.subscribe({
  next: (value: any) => console.log('Next:', value),
  complete: () => console.log('Complete!'),
  error: (error) => console.log('Error!', error)
})

const str = 'postgresql'

const data1$ = new Observable( (observer) => {
  fetch(`https://api.github.com/search/repositories?q=${str}`)
    .then(response => response.json())
    .then(data => {
      observer.next(data);
      observer.complete();
    })
    .catch(err => observer.error(err));
});

data1$.subscribe(data => console.log(data));

const apiKey = process.env.TOKEN
const city = 'Moscow'

const data2$ = new Observable( (observer) => {
  fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
    .then(response => response.json())
    .then(data => {
      observer.next(data);
      observer.complete();
    })
    .catch(err => observer.error(err));
});

data2$.subscribe(data => console.log(data));
