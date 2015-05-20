describe('Map', function() {

  beforeEach(function(){
  jasmine.getFixtures().fixturesPath = '.';
  loadFixtures('app/index.html'); 
  });

  it('has a page title', function(){
      expect(page).toContainText("fiveMinCatchup");
    });
});
