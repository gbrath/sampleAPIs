const STATUS = {
    COMPLETED: "completed",
    PENDING: "pending"
};

exports.getTaskStatus = (query) => {

    return new Promise((resolve, reject)  =>{
        let queryTask = +query.task; // queried task
        let visited = []; // To check if loop exist!
        let taskDeps = query.dependencyGraph.tasks;   	
        let taskStates = query.currentState.tasks;

        try{
            let isTaskOpen = (currTask)  => {
            if(visited[currTask]) { //loop exist
                reject(new Error('Task Dependency has loop'));
                return false;
            }else{
                visited[currTask] = true;
            }

            // base case
            if(taskDeps[currTask] && taskDeps[currTask].dependency.length == 0) {
                return (currTask == queryTask || taskStates[currTask].status == STATUS.COMPLETED);
            }else {
                let ret = false;
                for(let dependencyTask of taskDeps[currTask].dependency) { // check for dependency tasks
                    ret = isTaskOpen(dependencyTask);
                    if(!ret){   // return if any of the dependency task is not completed or is not open
                        break;
                    }
                }
		    return (ret && (currTask == queryTask || taskStates[currTask].status ==STATUS.COMPLETED));
            }
        }
        resolve(isTaskOpen(queryTask));

        }catch{ e =>
            reject(new Error('Incorrect format'));
        }
    })
}

