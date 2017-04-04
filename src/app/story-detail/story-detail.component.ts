import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { StoryEvent } from '../story-event.model';
import { StoryEventService } from '../story-event.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
  providers: [StoryEventService]
})
export class StoryDetailComponent implements OnInit {
  public story: StoryEvent;
  public branches: StoryEvent[] = [];

  constructor(private router: Router, private storyEventService: StoryEventService) { }

  ngOnInit() {
    this.story = this.storyEventService.getStoryById(1);
    this.story.branches.forEach((element) => {
      this.branches.push(this.storyEventService.getStoryById(element));
    });
  }

}
