const restify     = require('restify'),
      assert      = require('assert-plus'),
      testUrl     = process.env.TEST_URL || 'https://api.build.com/',
      testPath    = process.env.TEST_PATH || '/health',
      testRetries = process.env.TEST_RETRIES || false;

var client = restify.createJsonClient({
  retries: testRetries,
  url: testUrl
});
client.get(testPath, function(err, req, res, obj) {
  assert.ifError(err);
  console.log(JSON.stringify(obj, null, 2));
});
