import { Component, OnInit, Input, OnChanges, EventEmitter, Output, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit, OnChanges {
  @Input() public marks = 60;
  @Output() invalidMarks = new EventEmitter<string>();
  rank = 'NA';
  grade;
  processGrade() {
    if (this.marks > 100) {
      this.invalidMarks.emit('Invalid marks entered' + this.marks);
    }

    if (this.marks > 35) {
        this.grade = 'Pass';
      } else {
        this.grade = 'fail' ;
      }
  }

  constructor() {
    this.processGrade();
  }

  ngOnInit() {
    this.processGrade();
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.processGrade();

    console.log(' changed', this.marks);
  }

}
