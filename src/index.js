"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rxjs_1 = require("rxjs");
const rxjs_2 = require("rxjs");
const fetch = require("node-fetch");
require("dotenv/config");
const o = rxjs_1.range(0, 10);
o.subscribe({
    next: (value) => console.log('Next:', value),
    complete: () => console.log('Complete!'),
    error: (error) => console.log('Error!', error)
});
const str = 'postgresql';
const data1$ = new rxjs_2.Observable((observer) => {
    fetch(`https://api.github.com/search/repositories?q=${str}`)
        .then(response => response.json())
        .then(data => {
        observer.next(data);
        observer.complete();
    })
        .catch(err => observer.error(err));
});
data1$.subscribe(data => console.log(data));
const apiKey = process.env.TOKEN;
const city = 'Moscow';
const data2$ = new rxjs_2.Observable((observer) => {
    fetch(`http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`)
        .then(response => response.json())
        .then(data => {
        observer.next(data);
        observer.complete();
    })
        .catch(err => observer.error(err));
});
data2$.subscribe(data => console.log(data));
//# sourceMappingURL=index.js.map