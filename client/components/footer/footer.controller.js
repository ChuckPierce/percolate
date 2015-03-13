'use strict';

angular.module('percolateApp')
  .controller('FooterCtrl', function ($scope) {
  	$scope.something = 'something';
    $scope.footerNav = [
    {'title': 'Contact', 'link': '/'},
    {'title': 'Jobs', 'link': '/'},
    {'title': 'Blog', 'link': '/' },
    {'title': 'Terms of Service', 'link': '/' },
    {'title': 'Privacy', 'link': '/' },
    {'title': 'Made in NYC, SF, ATX & LDN', 'link': '/' }];
  });
