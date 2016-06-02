var WebPageTest = require('webpagetest');
var wpt = new WebPageTest('www.webpagetest.org');
var config = require('./config.json');

var options = {
  location: 'ec2-eu-west-1:Firefox',
  pollResults: 5,
  private: true,
  firstViewOnly: true,
  dryRun: false,
  pageSpeed: true,
  key: config.key2
}

wpt.runTest('http://www.google.com', options,function(err, res) {
  console.log(err);
  var firstView = res.data.average.firstView;

  console.log(res.data.testUrl);
  console.log('TTFB', firstView.TTFB);
  console.log('bytesOut', firstView.bytesOut);
  console.log('bytesIn', firstView.bytesIn);
  console.log('requests', firstView.requests);
  console.log('render', firstView.render);
  console.log('loadTime', firstView.loadTime);
  console.log('SpeedIndex', firstView.SpeedIndex);
});

/*Dulles_IE9
Dulles_IE10
Dulles_IE11
Dulles:Chrome
Dulles:Canary
Dulles:Firefox
Dulles:Firefox Nightly
Dulles:Safari
Dulles_MotoG:Motorola G - Chrome
Dulles_MotoG:Motorola G - Chrome Beta
Dulles_MotoG:Motorola G - Chrome Dev
ec2-us-east-1:Chrome
ec2-us-east-1:IE 11
ec2-us-east-1:Firefox
ec2-us-east-1:Safari
ec2-us-west-1:Chrome
ec2-us-west-1:IE 11
ec2-us-west-1:Firefox
ec2-us-west-1:Safari
ec2-us-west-2:Chrome
ec2-us-west-2:IE 11
ec2-us-west-2:Firefox
ec2-us-west-2:Safari
ec2-eu-west-1:Chrome
ec2-eu-west-1:IE 11
ec2-eu-west-1:Firefox
ec2-eu-west-1:Safari
ec2-eu-central-1:Chrome
ec2-eu-central-1:IE 11
ec2-eu-central-1:Firefox
ec2-eu-central-1:Safari
ec2-ap-northeast-1:Chrome
ec2-ap-northeast-1:IE 11
ec2-ap-northeast-1:Firefox
ec2-ap-northeast-1:Safari
ec2-ap-southeast-1:Chrome
ec2-ap-southeast-1:IE 11
ec2-ap-southeast-1:Firefox
ec2-ap-southeast-1:Safari
ec2-ap-southeast-2:Chrome
ec2-ap-southeast-2:IE 11
ec2-ap-southeast-2:Firefox
ec2-ap-southeast-2:Safari
ec2-sa-east-1:Chrome
ec2-sa-east-1:IE 11
ec2-sa-east-1:Firefox
ec2-sa-east-1:Safari*/
