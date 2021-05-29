const nameInput = document.getElementById('taskName');
const descInput = document.getElementById('taskDesc');
const taskTable = document.getElementById('taskTable');
const compTable = document.getElementById('compTable');

let taskList=[];
let compList=[];

button.addEventListener('click', () => {
    const name = nameInput.value;
    const description = descInput.value;

    nameInput.value = '';
    descInput.value = '';

    const task = new Task(name, description);
    taskList.push(task);

    updateTable(taskTable, taskList);
});

class Task{

    constructor(taskName, taskDesc){
        this.taskName = taskName;
        this.taskDesc = taskDesc;
    }

    addTask(table) {
        const row = document.createElement('tr');
        const cell1 = document.createElement('td');
        const cell2 = document.createElement('td');
        const cell3 = document.createElement('td');

        const compButton = document.createElement('button');
        compButton.classList.add('btn', 'btn-success', 'text-right');
        compButton.innerHTML = 'Complete';

        cell1.innerHTML = this.taskName;
        cell2.innerHTML = this.taskDesc;

        row.append(cell1);
        row.append(cell2);
        row.append(cell3);
        table.append(row);
        cell3.append(compButton)

        compButton.addEventListener('click', () => {
            const compTask = new Task(this.taskName, this.taskDesc);
            compList.push(compTask);
            taskList = taskList.filter(task => task.description != this.description);
            updateTable(taskTable, taskList);
            updateTable(compTable, compList);
            compButton.remove();
            cell3.remove();
        });
    }

}

function updateTable(table, list) {

    let length = table.children.length;
    for (let i = 0; i < length; i++) {
      const row = table.children[0];
      row.remove();
    }
  
    for (const task of list) {
      task.addTask(table);
    }
  }

function removeSelf(el){

}
  