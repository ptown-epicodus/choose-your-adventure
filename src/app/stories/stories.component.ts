import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { StoryEvent } from '../story-event.model';
import { StoryEventService } from '../story-event.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.css'],
  providers: [StoryEventService]
})
export class StoriesComponent implements OnInit {
  public currentStory: StoryEvent = null;

  constructor(private router: Router, private storyEventService: StoryEventService) { }

  ngOnInit() {
    this.currentStory = this.storyEventService.getStoryById(1);
  }

  selectBranch(branch: StoryEvent) {
    this.currentStory = branch;
  }
}
