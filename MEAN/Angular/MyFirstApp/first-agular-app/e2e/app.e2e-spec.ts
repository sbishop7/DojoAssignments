import { FirstAgularAppPage } from './app.po';

describe('first-agular-app App', () => {
  let page: FirstAgularAppPage;

  beforeEach(() => {
    page = new FirstAgularAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
