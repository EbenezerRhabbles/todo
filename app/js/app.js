var app = angular.module('app',[]);
app.controller('MainController', function(){
	this.items = [
		{
			name: 'test',
			description: 'testing',
			completed: false
		}
		// {Car:true,heelo:false},
		// {Laundry:'Not Fun'},
		// {Eat:""},
		// {Study:"",Well:true},
		// {Creaet:false},
		// {Repeat:"",Test:'hello'},
	];
	this.form = {
		name: '',
		description: '',
		completed: false
	};
	
	// this.boo = 'hello world';

	this.addTask = function() {
		this.items.push({
			name: this.form.name,
			description: this.form.description,
			completed: this.form.completed
		});
	};

	this.markCompleted = function (index) {
		// this.items[index].completed = !this.items[index].completed;
	};

});

// app.directive('task', function(){
// 	return {
// 		restrict: 'AE',
// 		template: '<li class="list-group-item">'+
// 					'<div>Task:<span ng-bind="taskName"></span></div>'+
// 					'<div>Description:{{taskDescription}}</div>'+
// 					'<div class="checkbox">'+
// 					  '<label><input type="checkbox" ng-value="true" ng-model="main.item" ng-change="markCompleted()">Completed</label>'+
// 					'</div>'+
// 				'</li>',
// 		// templateUrl: 'C:/Users/643878/Desktop/todo/app/js/itemTask.html',
// 		replace: true,
// 		scope: {
// 			taskName: '=',
// 			taskDescription:'=',
// 			taskCompleted: '=',
// 			taskIndex:'@',
// 		},
// 		link: function(scope, element, attr, mCtrl){
// 			scope.markCompleted = function () {
// 				console.log(scope)
// 				scope.completed = scope.$parent.main.items[scope.taskIndex].completed;
// 				scope.$parent.main.items[scope.taskIndex].completed = !scope.completed;
// 			};
// 		}

// 	};
// });