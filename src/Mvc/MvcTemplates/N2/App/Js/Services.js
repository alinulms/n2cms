﻿(function (module) {
	console.log("services.js");

	module.factory('Interface', function ($resource) {
		var res = $resource('Api/Interface.ashx', {}, {});
		return res;
	});

	module.factory('Children', function ($resource) {
		var res = $resource('Api/Children.ashx', {}, {});
		return res;
	});

})(angular.module('n2.services', ['ngResource']));