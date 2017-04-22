import { InkaPage } from './app.po';

describe('inka App', function() {
  let page: InkaPage;

  beforeEach(() => {
    page = new InkaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
