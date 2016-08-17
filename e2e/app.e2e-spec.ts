import { Ng2FormsPresentationPage } from './app.po';

describe('ng2-forms-presentation App', function() {
  let page: Ng2FormsPresentationPage;

  beforeEach(() => {
    page = new Ng2FormsPresentationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
