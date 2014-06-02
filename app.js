/**
 * Created by MarkBrown on 5/30/2014.
 */
var myModule = angular.module('Angello', []);

myModule.controller('MainCtrl', function($scope) {
    $scope.currentStory;

    var buildIndex = function(source, property){
        var tempArray = [];

        for(var i = 0, len = source.length; i < len; ++i){
            tempArray[source[i][property]] = source[i];
        }

        return tempArray;
    };

    $scope.setCurrentStatus = function(status){
        if(typeof $scope.currentStory !== 'undefined'){
            $scope.currentStory.status = status.name;
        }
    };

    $scope.setCurrentType = function(type){
        if(typeof $scope.currentType !== 'undefined'){
            $scope.currentStory.type = type.name;
        }
    }

    $scope.typesIndex = buildIndex($scope.types, 'name');
    $scope.statusesIndex = buildIndex($scope.statuses, 'name');

    $scope.createStory = function() {
        $scope.stories.push({
            title:'New Story',
            description:'Description pending.'
        });
    };

    $scope.setCurrentStory = function(story){
        $scope.currentStory = story;

        $scope.currentStatus = $scope.statusesIndex[story.status];
        $scope.currentType = $scope.typesIndex[story.type];
    };

    $scope.statuses = [
        {name:'Back Log'},
        {name:'To Do'},
        {name:'In Progress'},
        {name:'Code Review'},
        {name:'QA Review'},
        {name:'Verified'},
        {name:'Done'}
    ];

    $scope.types = [
        {name:'Feature'},
        {name:'Enhancement'},
        {name:'Bug'},
        {name:'Spike'}
    ];

    $scope.stories = [
        {
            title:'Story 00',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        },
        {
            title:'Story 01',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        },
        {
            title:'Story 02',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        },
        {
            title:'Story 03',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        },
        {
            title:'Story 04',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        },
        {
            title:'Story 05',
            description:'Description pending.',
            criteria:'Criteria pending',
            status:'To Do',
            type:'Feature',
            reporter:'Lukas Ruebbelke',
            assignee:'Brian Ford'
        }
    ];
});