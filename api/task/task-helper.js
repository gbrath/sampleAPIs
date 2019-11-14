const STATUS = {
    COMPLETED: "completed",
    PENDING: "pending"
};

exports.getTaskStatus = (query) => {

    return new Promise((resolve, reject)  =>{
        let queryTask = +query.task; // queried task
        let visited = []; // To check if loop exist!
        try{
            let isTaskOpen = (currTask)  => {
            if(visited[currTask]) { //loop exist
                reject(new Error('Task Dependency has loop'));
                return false;
            }else{
                visited[currTask] = true;
            }

            // base case
            if(query.dependencyGraph.tasks[currTask] && query.dependencyGraph.tasks[currTask].dependency.length == 0) {
                return (currTask == queryTask || query.currentState.tasks[currTask].status == STATUS.COMPLETED);
            }else {
                for(let dependencyTask of  query.dependencyGraph.tasks[currTask].dependency) {
                    let ret = isTaskOpen(dependencyTask);
                    return (ret && query.currentState.tasks[dependencyTask].status ==STATUS.COMPLETED);
                }
            }
        }
        resolve(isTaskOpen(queryTask));

        }catch{ e =>
            reject(new Error('Incorrect format'));
        }
    })
}

