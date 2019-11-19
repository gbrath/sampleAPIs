# About 
Given a task dependency graph, need to find if a particular task is open or not or if there exist any dependency loop. 

# How to Run Project
 Prerequisite: Node js 10+ installation
 - cd "Project Location"
 - "npm install" - to install dependencies
 - "npm start" -for starting project
 - "npm stop" - for stopping the project


## api details

  End point : /api/task/status

  Method    : Post

  Content Type : application/json


Sample format for post data: {
	"dependencyGraph":{
	"tasks":[
			{ "dependency":[3] }, 
			{ "dependency":[3] }, 
			{ "dependency":[3] }, 
			{ "dependency":[1] }
		]
	},
"currentState":{
"tasks":[
		{"status":"pending"},
		{"status":"pending"},
		{"status":"completed"},
		{"status":"pending"}
		]
},
"task": 3
}
