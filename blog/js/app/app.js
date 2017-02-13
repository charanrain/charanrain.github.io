'use strict'

var app = angular.module('blog', ['blog_detail','blog-list','ngRoute','ngResource']);
app.config(function($routeProvider){
  $routeProvider.
  when('/',{
    template:'<blog-List></blog-List>'
  }).
  when('/hi/',{
    template:'<h1>Hellow</h1>'
  }).
  when('/blog/:id', {
    template: '<blog-Detail></blog-Detail>'
  }).
  otherwise({
    template:'<h1>Not Found</h1>'
  })
});
app.controller('postMe', function($http,$scope){
  function dummy(ine){
    var parameter = JSON.stringify(ine);
        $http.post('app/dummy.json', parameter).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            console.log(data);
          }).
          error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
          });
  }

});
