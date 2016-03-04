chai = require 'chai'
chai.should()
expect = chai.expect
index = require '../src/index.coffee'

describe 'Example', ->
	it 'True should be true', ->
		true.should.equal(true)