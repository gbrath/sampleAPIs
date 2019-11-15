# How to Run Project
 Prerequisite: Node js 10+ installation
 - cd "Project Location"
 - "npm install" - to install dependencies
 - "npm start" -for starting project
 - "npm stop" - for stopping the project
 
Dev server would be running on http://localhost:3000 
## Live API

  http://13.233.247.113/api/task/status

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
