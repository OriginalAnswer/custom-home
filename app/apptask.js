function taskCheck(a, b, c) {
    // console.log(a);//앱 id
    // console.log(b);//객체 id
    console.log(c);//체크여부

    let currentAppJSON = localStorage.getItem(a);
    let parsedCurrentAppData = JSON.parse(currentAppJSON);
    let arr = parsedCurrentAppData;
    console.log(arr);
    if (c === true ) {
        arr = arr.map(p => p.id === b ? { ...p, statu: 'ture' }: p);
    } else {
        arr = arr.map(p => p.id === b ? { ...p, statu: 'false' }: p);
    }
    saveTask(a,arr);
}


function deleteTask(t) {
    const dv = event.target.parentElement;//e(눌린) 버튼의 어미 노드
    const appId = dv.dataset.group;
    // console.log(dv);
    // console.log(appId);
    dv.remove();//노드삭제
    
    
    let currentAppJSON = localStorage.getItem(appId);
    let parsedCurrentAppData = JSON.parse(currentAppJSON);
    let arr = parsedCurrentAppData;
    // console.log(arr);
    arr = arr.filter(t => t.id !== parseInt(dv.id));
    // console.log(arr);
    saveTask(appId,arr);
}
function printTask(a, b, c) {
    // console.log(a);//어레이 -> 오브젝트
    // console.log(b);//클래스
    // console.log(c);//아이디
    const currentShow = document.querySelector(`.${b}`);

    const dv = document.createElement('div');//div 생성
    dv.classList.add('task-item');//.task-list를 가진 div 컨테이너
    dv.id = a.id;
    dv.dataset.group = c;
    
    if (a.statu === "ture") {
        dv.innerHTML = `
        <input type="checkbox" class="task-checkbox" id="${a.id}" onchange="taskCheck(${c}, ${a.id}, this.checked)" checked>
        <span>${a.text}</span>
        <i class="fas fa-times icon-del" onclick="deleteTask()"></i>
        `;
    } else {
        dv.innerHTML = `
        <input type="checkbox" class="task-checkbox" id="${a.id}" onchange="taskCheck(${c}, ${a.id}, this.checked)">
        <span>${a.text}</span>
        <i class="fas fa-times icon-del" onclick="deleteTask()"></i>
        `;
    }
    currentShow.appendChild(dv);
}




function saveTask(a,b) {
    localStorage.setItem(a, JSON.stringify(b));
}
function appTask() {
    event.preventDefault();
    const appId = event.target.name;
    const currentInput = document.getElementById(`input-${appId}`);
    const currentInputValue = currentInput.value;

    
    let currentAppJSON = localStorage.getItem(appId);
    let parsedCurrentAppData = JSON.parse(currentAppJSON);

    
    currentInput.innerText = "";
    currentInput.value = "";
    
    const newtask = {
        id: Date.now(),
        text: currentInputValue,
        statu: false
    }    
    parsedCurrentAppData.push(newtask);

    localStorage.setItem(appId, JSON.stringify(parsedCurrentAppData));
    saveTask(appId, parsedCurrentAppData);

    printTask(parsedCurrentAppData.at(-1), `show-${appId}`, appId);//어레이, 클래스, 아이디 // at(-1)은 arr 마지막 요소.

}