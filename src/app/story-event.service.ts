import { Injectable } from '@angular/core';

import { StoryEvent } from './story-event.model';
import { STORIES } from './mock-stories';

@Injectable()
export class StoryEventService {

  constructor() { }

  getStories() {
    return STORIES;
  }

  getStoryById(id: number) {
    for (let i: number = 0; i < STORIES.length; i++) {
      let story: StoryEvent = STORIES[i];
      if (story.id === id) {
        return story;
      }
    }
  }
}
