import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit, OnChanges {
  @Input() readerInput: string;
  stack: Array<string> = [];

  constructor() { }

  ngOnInit(): void {
  }

  // Changes only fired when the parent (of this component) changes it's value
  ngOnChanges(changes: SimpleChanges) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        switch (propName) {
          case 'readerInput': {
            const msg = 'readerInput changed from "' + changes[propName].previousValue + '" to "' + changes[propName].currentValue + '"';
            console.log(msg);
            this.stack.push(msg);
          }
        }
      }
    }
  }

}
