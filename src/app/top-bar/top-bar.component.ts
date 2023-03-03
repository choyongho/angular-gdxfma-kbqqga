import { Component, OnInit } from '@angular/core';
import { fromEvent, of } from 'rxjs';
import { scan } from 'rxjs/operators';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    /**
    alert('dd');
    const observable = fromEvent(document, 'click');
    const observer = () => alert('test');
    observable.subscribe(observer);
    **/
    /**
    const observable = fromEvent(document, 'click').pipe(
      scan((count) => count + 1, 0)
    );
    const observer = (count) => console.log(`Clicked ${count} times`);
    observable.subscribe(observer);
    **/
    const source = of(1, 2, 3);
    // 간단한 scan 예시로, 0부터 시작해서 더해나갑니다.
    const example = source.pipe(scan((acc, curr) => acc + curr, 0));
    // 누적된 값을 기록합니다.
    // output: 1,3,6
    const subscribe = example.subscribe((val) => console.log(val));
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
