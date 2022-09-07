const Twitter = require('twitter')
const fs = require('fs-extra')

const client = new Twitter({
  consumer_key: '[CONSUMER KEY]',
  consumer_secret: '[CONSUMER SECRET]',
  access_token_key: '[ACCESS TOKEN]',
  access_token_secret: '[ACCESS TOKEN SECRET]'
})