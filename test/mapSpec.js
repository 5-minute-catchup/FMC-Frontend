describe('Google map display on the index page', function() {

  // if('the user has not logged in', function(){
  //   expect(navigator.geolocation).toBeUndefined();
  // });


// if a user is logged in
  it('the map and its geolocation can be found', function() {
    expect(navigator.geolocation).toBeDefined();
  });

  it('the location of the user can be found', function() {
    expect(typeof navigator.geolocation.getCurrentPosition).toBeDefined();
    expect(typeof navigator.geolocation.getCurrentPosition == 'function').toBe(true);
  });

  it('if he/she moves, the location of the user can be tracked in real time', function() {
    expect(typeof navigator.geolocation.watchPosition).toBeDefined();
    expect(typeof navigator.geolocation.watchPosition == 'function').toBe(true);
  });

  it('ongoing watchPosition calls are put on hold when one is already running', function() {
    expect(typeof navigator.geolocation.clearWatch).toBeDefined();
    expect(typeof navigator.geolocation.clearWatch == 'function').toBe(true);
  });


  xit('it returns the exact location of a user (meaning the makers academy location where we are now)', function(){
    var makersAcademyLocation = {
      coords: {
        accuracy: 22,
        longitude: -0.07334979999999999,
        latitude: 51.51734270000001,
        speed: null,
        altitude: null,
        heading: null,
        altitudeAccuracy: null,
        timestamp: new Date().getTime()
      }
    };

     var expectedResult = {
      accuracy: makersAcademyLocation.coords.accuracy,
      latitude: makersAcademyLocation.coords.latitude,
      longitude: makersAcademyLocation.coords.longitude
     };

     var myLocation = navigator.geolocation.getCurrentPosition;
      // position.coords.latitude;
      // position.coords.longitude;  

    expect(myLocation).toEqual(expectedResult);
  });
});
