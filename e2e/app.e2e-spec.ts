import { EventfindaWebPage } from './app.po';

describe('eventfinda-web App', function() {
  let page: EventfindaWebPage;

  beforeEach(() => {
    page = new EventfindaWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
