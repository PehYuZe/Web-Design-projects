//functions and variables for first component
const list_1 = [];

function add_1() {
    const task = document.querySelector('.task_1-js');
    list_1.push(task.value);
    task.value = '';
}

function resetList_1() {
    list_1.splice(0, list_1.length);
}

function displayList_1() {
    console.log(list_1);
}
///////////////////////////////////////////////

//function and variables for second component
const list_2 = [];

function add_2(){
    const task = document.querySelector('.task_2-js');
    if (task.value === '')
        return;
    list_2.push(task.value);
    //console.log(list_2);
    task.value = '';
}

function resetList_2() {
    list_2.splice(0, list_2.length);
    document.querySelector('.displayList-js').innerHTML = '';
}

function displayList_2() {
    let html = '';
    for(let i = 0; i<list_2.length; i++){
        let task = `<p>${i+1}. ${list_2[i]}</p>`;
        html = html + task;
    }
    //console.log(html);
    document.querySelector('.displayList-js').innerHTML = html;
}
////////////////////////////////////////////////

//function and variables for third component
const list_3 = [];

function add_3(){
    const task = document.querySelector('.task_3-js').value;
    const date = document.querySelector('.date_3-js').value;
    if (task === '')
        return;
    const attribute = {task, date};
    list_3.push(attribute);
    //console.log(list_3);
    document.querySelector('.task_3-js').value = '';
    document.querySelector('.date_3-js').value = '';
}

function resetList_3() {
    list_3.splice(0, list_3.length);
    document.querySelector('.displayList_3-js').innerHTML = '';
}

function displayList_3() {
    let html = '';
    for(let i = 0; i<list_3.length; i++){
        const name = list_3[i].task;
        const date = list_3[i].date;
        //const { name, date } = list_3[i];
        let task = `
        <div class="grid-css">
            <div class="task-css">${i+1}. ${name}</div>
            <div class="task-css">${date}</div>
            <button class="delete_button-css" onclick = "
                deleteItem(${i});
                displayList_3();
            ">Delete</button>
        </div>`;
        html = html + task;
    }
    //console.log(html);
    document.querySelector('.displayList_3-js').innerHTML = html;
}

function deleteItem(index){
    list_3.splice(index, 1);
}
////////////////////////////////////////////////