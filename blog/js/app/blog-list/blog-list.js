'use strict'

var blog_list = angular.module('blog-list', []);
blog_list.component('blogList', {
  templateUrl:'js/templates/blog-list.html',
  controller: function($http,$routeParams, $scope){
    $http.get('http://charanrain.github.io/blog/core/posts/blog-data.json').then(successCallback,errorCallback);
function successCallback(response, config, status, statusText){
var items = response.data;
console.log(items);
$scope.lists = items;
}
function errorCallback(response, config, status, statusText){

}
  }
});
