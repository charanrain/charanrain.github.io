'use strict'

var blog_detail = angular.module('blog_detail', []);

blog_detail.component('blogDetail', {
  templateUrl:'templates/blog-detail.html',
  controller: function($http,$routeParams, $scope){
    $http.get('core/posts/blog-data.json').then(successData,errorData);
function successData(response, config, status, statusText){
  var blogItem = response.data;

  $scope.posts = blogItem;
  angular.forEach(blogItem, function(post){
    if($routeParams.id == post.id){
      $scope.notFound = false;
      $scope.blog = post;
    }
  });
}
function errorData(response, config, status, statusText){

}
});
