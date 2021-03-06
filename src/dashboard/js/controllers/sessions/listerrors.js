/*
 * Copyright (c) 2015 Demian Holderegger
 * Licensed under the MIT license.
 */

/**
 * Sessions with Errors List Controller
 */

app.controller('SessionsListErrorsCtrl', function($scope, $http) {

	$scope.data = {};

	$http.get('/api/sessionErrors').
		success(function(data, status, headers, config) {
			$scope.data = data;
		}).
		error(function(data, status, headers, config) {
			console.log(status, data);
		});
});