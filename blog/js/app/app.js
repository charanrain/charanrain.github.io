'use strict'

var app = angular.module('blog', ['blog_detail','blog-list','ngRoute','ngResource']);
app.config(function($routeProvider, $locationProvider){
  $locationProvider.html5Mode({
    enabled:true
  });
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
