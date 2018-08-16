const { Given, When, Then } = require('cucumber');
	var url="http://juliemr.github.io/protractor-demo/";
	browser.get(url);
 Given('I browse to homepage', function () {
           // Write code here that turns the phrase above into concrete actions
	 browser.get(url);
           return 'pending';
         });
 
 When('I enter first number and second number', function () {
     // Write code here that turns the phrase above into concrete actions
     return 'pending';
   });
 
 Then('I should see the result', function () {
     // Write code here that turns the phrase above into concrete actions
     return 'pending';
   });
