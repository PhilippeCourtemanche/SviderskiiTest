describe('Montreal test', function() {
  it('should pass the test if Montreal is in the contact page', function() {
    browser.waitForAngularEnabled(false);
    browser.get('http://www.globaleagle.com/');

    element(by.css('[title="contact global eagle entertainment"]')).click();

    var textInPage = element(by.id('main-wrapper'));
    expect(textInPage.getText()).toContain('Montreal');
  });
});