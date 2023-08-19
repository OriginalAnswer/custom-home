function deleteTask(t){
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
    // console.log(currentShow);
    // a.forEach(t => {
    //     // console.log(t.text);
    //     const dv = document.createElement('div');//div 생성
    //     dv.classList.add('task-item');//.task-list를 가진 div 컨테이너
    //     dv.id = t.id;
    //     dv.dataset.group = c;
        
    //     dv.innerHTML = `
    //     <input type="checkbox" class="task-checkbox" id="${t.id}">
    //     <span>${t.text}</span>
    //     <i class="fas fa-times icon-del" onclick="deleteTask()"></i>
    //     `;
    //     currentShow.appendChild(dv);
    // });

        const dv = document.createElement('div');//div 생성
        dv.classList.add('task-item');//.task-list를 가진 div 컨테이너
        dv.id = a.id;
        dv.dataset.group = c;
        
        dv.innerHTML = `
        <input type="checkbox" class="task-checkbox" id="${a.id}">
        <span>${a.text}</span>
        <i class="fas fa-times icon-del" onclick="deleteTask()"></i>
        `;
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
        checked: false
    }
    // console.log(newtaskObj);
    
    parsedCurrentAppData.push(newtask);
    // console.log(parsedCurrentAppData);
    // arr.push(newtaskObj);
    // console.log(arr);

    localStorage.setItem(appId, JSON.stringify(parsedCurrentAppData));
    saveTask(appId,parsedCurrentAppData)
    // -----------------------프린트------------------------
    // printTask(parsedCurrentAppData, `show-${appId}`, appId);
    // parsedCurrentAppData.forEach(element => printTask(element, `show-${appId}`, appId));
    printTask(parsedCurrentAppData.at(-1), `show-${appId}`, appId);//어레이, 클래스, 아이디

}

// if()