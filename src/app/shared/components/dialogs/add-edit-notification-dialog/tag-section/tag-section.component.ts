import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-tag-section',
  templateUrl: './tag-section.component.html',
  styleUrls: ['./tag-section.component.scss']
})
export class TagSectionComponent implements OnChanges {

  constructor() { }

  @Input()
  tags: [][] = [];

  @Output()
  addedTag = new EventEmitter<string>();

  ngOnChanges(changes: SimpleChanges) {
  }

  addTag(tag: string) {
    this.addedTag.emit(tag);
  }
}
