var app = angular.module('single-page-app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: 'partial/home.html',
            controller:'homeCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'partial/about.html',
            controller: 'aboutCtrl'
        })
        .state('stat', {
            url: '/stat',
            templateUrl: 'partial/stat.html',
            controller: 'statCtrl'
        })
        .state('profile', {
            url: '/profile',
            templateUrl: 'partial/profile.html',
            controller: 'profileCtrl'
        })
/*        .state('stat.statDefault', {
            url: '/statDefault',
            templateUrl: 'partial/stat.html'
        })
 */
        .state('stat.rideTime', {
            url: '/rideTime',
            templateUrl: 'partial/rideTime.html'
        })
        .state('stat.rideHistory', {
            url: '/rideHistory',
            templateUrl: 'partial/rideHistory.html',
            controller: 'rideHistoryCtrl'
        })
        .state('home',{
            url: '/home',
            templateUrl: 'partial/home.html'
        });


});

app.controller('cfgController', function ($scope) {

    /*      
    Here you can handle controller for specific route as well.
    */

});

app.controller('homeCtrl', function ($scope) {
    console.log('PageHome');
});

app.controller('aboutCtrl', function ($scope) {
    console.log('PageAbout');
});

app.controller('statCtrl', function ($scope) {
    console.log('StatPage');
})

/*
app
.directive('d3Bars', ['$window', '$timeout', 'd3Service', 
  function($window, $timeout, d3Service) {
    return {
      restrict: 'A',
      scope: {
        data: '=',
        label: '@',
        onClick: '&'
      },
      link: function(scope, ele, attrs) {
        d3Service.d3().then(function(d3) {
 
          var renderTimeout;
          var margin = parseInt(attrs.margin) || 20,
              barHeight = parseInt(attrs.barHeight) || 20,
              barPadding = parseInt(attrs.barPadding) || 5;
 
          var svg = d3.select(ele[0])
            .append('svg')
            .style('width', '100%');
 
          $window.onresize = function() {
            scope.$apply();
          };
 
          scope.$watch(function() {
            return angular.element($window)[0].innerWidth;
          }, function() {
            scope.render(scope.data);
          });
 
          scope.$watch('data', function(newData) {
            scope.render(newData);
          }, true);
 
          scope.render = function(data) {
            svg.selectAll('*').remove();
 
            if (!data) return;
            if (renderTimeout) clearTimeout(renderTimeout);
 
            renderTimeout = $timeout(function() {
              var width = d3.select(ele[0])[0][0].offsetWidth - margin,
                  height = scope.data.length * (barHeight + barPadding),
                  color = d3.scale.category20(),
                  xScale = d3.scale.linear()
                    .domain([0, d3.max(data, function(d) {
                      return d.score;
                    })])
                    .range([0, width]);
 
              svg.attr('height', height);
 
              svg.selectAll('rect')
                .data(data)
                .enter()
                  .append('rect')
                  .on('click', function(d,i) {
                    return scope.onClick({item: d});
                  })
                  .attr('height', barHeight)
                  .attr('width', 140)
                  .attr('x', Math.round(margin/2))
                  .attr('y', function(d,i) {
                    return i * (barHeight + barPadding);
                  })
                  .attr('fill', function(d) {
                    return color(d.score);
                  })
                  .transition()
                    .duration(1000)
                    .attr('width', function(d) {
                      return xScale(d.score);
                    });
              svg.selectAll('text')
                .data(data)
                .enter()
                  .append('text')
                  .attr('fill', '#fff')
                  .attr('y', function(d,i) {
                    return i * (barHeight + barPadding) + 15;
                  })
                  .attr('x', 15)
                  .text(function(d) {
                    return d.name + " (scored: " + d.score + ")";
                  });
            }, 200);
          };
        });
      }}}])
*/

