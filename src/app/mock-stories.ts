import { StoryEvent } from './story-event.model';

export const STORIES: StoryEvent[] = [
  new StoryEvent(1, '', 'You start out in your kitchen, Earth Dimension C137',
    0, 'https://i.ytimg.com/vi/3ht-ZyJOV2k/maxresdefault.jpg', [2, 3]),
  new StoryEvent(2, 'Grab portal gun from garage', '',
    0, 'https://i.ytimg.com/vi/3ht-ZyJOV2k/maxresdefault.jpg' ,[]),
  new StoryEvent(3, 'Startup car', '',
    0, 'https://i.ytimg.com/vi/3ht-ZyJOV2k/maxresdefault.jpg', [])
];
