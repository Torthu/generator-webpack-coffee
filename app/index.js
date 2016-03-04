'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');

var CoffeePackGenerator = module.exports = function CoffeePackGenerator(args, options, config) {
	yeoman.generators.Base.apply(this, arguments);

	this.on('end', function () {
		this.installDependencies({ skipInstall: options['skip-install'] });
	})

	this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(CoffeePackGenerator, yeoman.generators.Base);

CoffeePackGenerator.prototype.askFor = function askFor() {
	var cb = this.async();

	console.log(this.yeoman);

	var prompts = [
		{
			name: 'projectName',
			message: 'What is the name of your project?'
		}
	];

	this.prompt(prompts, function (props) {
		this.projectName = prompts.projectName;
		cb();
	}.bind(this));
};

CoffeePackGenerator.prototype.projectfiles = function () {
	this.copy('editorconfig', '.editorconfig');
	this.copy('gitignore', '.gitignore');
	this.copy('_webpack.config.js', 'webpack.config.js');
	this.copy('_package.json', 'package.json');
	this.mkdir('src');
	this.mkdir('build');
	this.mkdir('test');
	this.copy('_test.coffee', 'test/test.coffee');
	this.copy('_index.coffee', 'src/index.coffee');
	this.copy('_README.md', 'README.md');
	this.copy('_index.html', 'index.html');
};