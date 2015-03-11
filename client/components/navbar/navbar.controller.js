'use strict';

angular.module('percolateApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.primary = [
    {'title': 'Platform', 'link': '/'},
    {'title': 'Services', 'link': '/'},
    {'title': 'Clients', 'link': '/' },
    {'title': 'Company', 'link': '/' },
    {'title': 'Insights', 'link': '/' },
    {'title': 'Blog', 'link': '/'}];

    $scope.secondary = [
    {'title': 'We\'re Hiring', 'link': '/'},
    {'title': 'Login', 'link': '/'},
    {'title': 'Request a Demo', 'link': '/'}];

    $scope.isCollapsed = true;
  });