'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var MuWebappRouteGenerator = yeoman.generators.Base.extend({
  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic MuWebappRoute generator.'));

    var prompts = [{
      name: 'routeName',
      message: 'Which route do you want to create?'
    }];

    this.prompt(prompts, function (props) {
      this.routeName = props.routeName;

      done();
    }.bind(this));
  },

  app: function () {
    var routeName = this.routeName,
        appPath = '../src/js/app/',
        tmplPath = appPath + routeName + '/';
    this.mkdir(tmplPath);
    this.template('index.html', tmplPath + 'index.html');
    this.template('module.coffee', appPath + 'module/' + routeName + '.coffee');
    this.template('view.coffee', appPath + 'view/' + routeName + '.coffee');
    this.copy('route.sass', '../src/css/page/' + routeName + '.sass');
  }
});

module.exports = MuWebappRouteGenerator;
