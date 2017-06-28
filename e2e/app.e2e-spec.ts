import { ScramPage } from './app.po';

describe('scram App', () => {
  let page: ScramPage;

  beforeEach(() => {
    page = new ScramPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
