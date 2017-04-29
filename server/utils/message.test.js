var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'kolbykskk@aol.com';
    var text = 'Hello!';

    var message = generateMessage(from, text);

    expect(message).toInclude({from, text});
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var url = 'https://www.google.com/maps?q=1,1';

    var message = generateLocationMessage(from, 1, 1);

    expect(message).toInclude({from, url});
    expect(message.createdAt).toBeA('number');
  });
});
