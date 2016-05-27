var WebPageTest = require('webpagetest');
var wpt = new WebPageTest('www.webpagetest.org');

var options = {
  location: 'ec2-eu-west-1:Firefox',
  pollResults: 5,
  private: true,
  firstViewOnly: true,
  key: 'A.2fdf88167662c297cc6cb75f2255d1b5'
}

wpt.runTest('https://twitter.com/marcelduran', options,function(err, data) {
  console.log(err || data);
});
