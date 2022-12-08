// an observable is like a pipe for data. RxJS gives us tools to modify those pipes.

import { Observable, BehaviorSubject, of, from } from "rxjs";
import { filter, map } from "rxjs/operators" // filter seems to be deprecated
// creating an observable is like connecting a pipe to a water source.
// we are exporting this observable so that someone can subscribe to it.
// subscribe means we are opening the valve to this observale pipe to let the data or stream flow.

export const rawQuotes$ = new BehaviorSubject([])

fetch('./data.json')
    .then(res => res.json())
    .then(data => rawQuotes$.next(data))


