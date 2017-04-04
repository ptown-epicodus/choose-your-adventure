import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { StoryEvent } from '../story-event.model';
import { StoryEventService } from '../story-event.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [StoryEventService]
})
export class StoryDetailComponent implements OnInit, OnChanges {
  @Input() childCurrentStory: StoryEvent;
  @Output() branchSelectedSender = new EventEmitter();
  public branches: StoryEvent[];

  constructor(private router: Router, private storyEventService: StoryEventService) { }

  ngOnInit() {
    this.populateBranches();
  }

  ngOnChanges() {
    this.populateBranches();
  }

  populateBranches() {
    this.branches = [];
    this.childCurrentStory.branches.forEach((element) => {
      this.branches.push(this.storyEventService.getStoryById(element));
    });
  }

  branchSelected(branch: StoryEvent) {
    this.branchSelectedSender.emit(branch);
  }

}
