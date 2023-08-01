// function printTask(ID) {
//     const task = document.createElement('div');
//     tack
// }

function saveTask(){
    localStorage.setItem(TASK_KEY, JSON.stringify(taskArr));
}

function appTask() {
    event.preventDefault();
    console.log(event);
}