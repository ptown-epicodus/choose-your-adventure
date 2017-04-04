import { ToEnlightenmentPage } from './app.po';

describe('to-enlightenment App', function() {
  let page: ToEnlightenmentPage;

  beforeEach(() => {
    page = new ToEnlightenmentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
