exports.config = {
	seleniumAddress : 'http://localhost:4444/wd/hub',
	framework : 'custom',
	baseURI: "http://juliemr.github.io/protractor-demo/",
	frameworkPath: require.resolve('protractor-cucumber-framework'),
	specs : [ '../features/test.feature' 
	],
	/*allScriptsTimeout: 380000,
	  getPageTimeout: 20000,*/
	  cucumberOpts : {
		  require: ['../test/stepDefinitions.js'
			]  
	},
	onPrepare : function() {
		browser.manage().window().maximize();
   }
};