'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /monitor when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/monitor");
  });


  describe('monitor', function() {

    beforeEach(function() {
      browser.get('index.html#!/monitor');
    });


    it('should render monitor when user navigates to /monitor', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('doctor', function() {

    beforeEach(function() {
      browser.get('index.html#!/doctor');
    });


    it('should render doctor when user navigates to /doctor', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
