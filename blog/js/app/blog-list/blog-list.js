'use strict'

var blog_list = angular.module('blog-list', []);
blog_list.component('blogList', {
  templateUrl:'js/templates/blog-list.html',
  controller: function($http,$routeParams, $scope){
    $http.get('core/posts/blog-data.json').then(successData,errorData);
function successData(response, config, status, statusText){
  var lists = response.data;
}
function errorData(response, config, status, statusText){

}
  }
});
