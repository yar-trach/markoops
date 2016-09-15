'use strict';

module.exports = function(grunt) {
    require('load-grunt-config')(grunt, {
    	data: {
    		bowerComponents: 'bower_components',
    		temp: 'temp',
    		dev: 'dev',
    		styles: 'dev/styles',
    		scripts: 'dev/scripts',
    		grunt: 'grunt'
    	}
    });
};