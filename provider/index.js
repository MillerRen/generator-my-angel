'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('angularjs-component:provider', {arguments: this.arguments}, { local: require.resolve('generator-angularjs-component/provider') });
  }
});

module.exports = Generator;