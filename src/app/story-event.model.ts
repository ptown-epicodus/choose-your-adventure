export class StoryEvent {
  // public id: number;
  // public imageLink: string;
  // public choiceDescription: string;
  // public resultDescription: string;
  // public branches: number[];
  // public points: number;

  constructor(
    public id: number,
    public choiceDescription: string,
    public resultDescription: string,
    public points: number,
    public imageLink: string,
    public branches: number[]
  ) { }
}
