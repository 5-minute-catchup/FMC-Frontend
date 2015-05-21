describe('Facebook sign in', function() {

  var user = {"id":"1569428933320814","email":"edmund.obrien.2010@live.rhul.ac.uk","first_name":"Ed","gender":"male","last_name":"O'Brien","link":"https://www.facebook.com/app_scoped_user_id/1569428933320814/","locale":"en_GB","name":"Ed O'Brien","timezone":1,"updated_time":"2015-05-06T09:56:39+0000","verified":true}

  beforeEach(function() {
    browser.get('http://localhost:3000');
  });

  // it('has a title', function() {
  //   expect(browser.getTitle()).toEqual('Five Minute Catchup');
  // });

  it('has a login button', function() {
    expect(element(by.id('fb-login')).isPresent()).toBe(true); 
  });

  // it('the fb api call is successful', function() {
  //   $('#fb-login').click()
  //   expect(response.status).toBe("connected")
  //   expect(response.data.token)

  // });

  // it('')
});
