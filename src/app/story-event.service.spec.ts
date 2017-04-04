/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoryEventService } from './story-event.service';

describe('StoryEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryEventService]
    });
  });

  it('should ...', inject([StoryEventService], (service: StoryEventService) => {
    expect(service).toBeTruthy();
  }));
});
