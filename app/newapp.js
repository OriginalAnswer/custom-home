const sectionC = document.querySelector('.section-c');


let appsArr = [];

function newapp(value) {
    const newappName = value;

    const newappObj = {
        id: Date.now(),
        type: newappName,
        name: newappName,
        section: 'c',
        statu: 'open'
    }; 

    appsArr.push(newappObj);
    createNewapp(newappObj); // 새로운 앱 요소 생성 및 추가
    saveAppsArr(); // appsArr 저장

    const newAppToggle = document.getElementById('newapptoggle');
    if (newAppToggle) {
        newAppToggle.checked = false;
    };

}

function createNewapp(appObj) {

    const app = document.createElement('div');
    const appId = appObj.id;
    app.classList.add('app');
    app.id = appId;
    app.draggable = true;
    app.dataset.type = appObj.type;
    if (appObj.type == 'memo') {
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="${appId}-title" class="dpnone" onchange="">
            <label for="${appId}-title" class="app-title toggle dpnone">${appObj.name}</label>
            <input type="checkbox" id="${appId}-set" class="dpnone">
            <label for="${appId}-set" class="app-set-icon  toggle">i</label>
        </div>
        <div class="app-print">
            <textarea id="${appId}-app" oninput="apptext(this.value, ${appId})" rows="1" placeholder="type here..."></textarea>
        </div>
        `;
        //Individual obj
        const indiObj = {
            id: appId,
            type: appObj.type,
            content: ""
        }
        localStorage.setItem(`${appId}`, JSON.stringify(indiObj));
    }
    else if (appObj.type == "task") {
        app.innerHTML = `<input type="checkbox" id="${appId}-title" class="dpnone">
        <div class="app-header">
        <label for="${appId}-title" class="app-title toggle">${appObj.name}</label>
        <input type="checkbox" id="${appId}-set" class="dpnone">
        <label for="${appId}-set" class="app-set-icon toggle">i</label>
        </div>
        <form class="app-print">
            <div class="task-bar">
                <label for="task-input"><i class="fa-regular fa-pen-to-square"></i></label>
                <input type="text" id="task-input" class="task-input" required>
                <button type="submit"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div id="task-show" class="task-show">
            </div>
        </form>`;
        //Individual obj
        const indiObjArr = [];
        localStorage.setItem(`${appId}`, JSON.stringify(indiObjArr));
    } 
    else if (appObj.type == "links") {
        app.innerHTML = `<input type="checkbox" id="${appId}-title" class="dpnone">
        <div class="app-header">
        <label for="${appId}-title" class="app-title toggle">${appObj.name}</label>
        <input type="checkbox" id="${appId}-set" class="dpnone">
        <label for="${appId}-set" class="app-set-icon toggle">i</label>
        </div>
        <form class="app-print">
            <div>
                <input id="quicklink-input-title" type="text" placeholder="Name" required="">
                <input id="quicklink-input-url" type="url" placeholder="URL" required="">
            </div>
            <button><i class="fa-solid fa-plus"></i></button>
        </form>`;
        //Individual obj
        const indiObjArr = [];
        localStorage.setItem(`${appId}`, JSON.stringify(indiObjArr));
    } 


    sectionC.appendChild(app);
}

// ===================================================
function printApp(appObj) {
    const app = document.createElement('div');
    const appId = appObj.id;
    app.classList.add('app');
    app.id = appId;
    app.draggable = true;
    app.dataset.type = appObj.type;

    if (appObj.type == "memo") {
        const currentAppDataJSON = localStorage.getItem(appId);
        const parsedCurrentAppData = JSON.parse(currentAppDataJSON);
        const currentContent = parsedCurrentAppData.content;
        console.log(currentContent);


        app.innerHTML = `
        <div class="app-header">
        <input type="checkbox" id="${appId}-title" class="dpnone" onchange="">
            <label for="${appId}-title" class="app-title toggle dpnone">${appObj.name}</label>
            <input type="checkbox" id="${appId}-set" class="dpnone">
            <label for="${appId}-set" class="app-set-icon  toggle">i</label>
        </div>
        <div class="app-print">
            <textarea id="${appId}-app" oninput="apptext(this.value, ${appId})" rows="1" placeholder="type here...">${currentContent}</textarea>
        </div>
        `;
    } 
    else if (appObj.type == "task") {
        app.innerHTML = `<input type="checkbox" id="${appId}-title" class="dpnone">
        <div class="app-header">
        <label for="${appId}-title" class="app-title toggle">${appObj.name}</label>
        <input type="checkbox" id="${appId}-set" class="dpnone">
        <label for="${appId}-set" class="app-set-icon toggle">i</label>
        </div>
        <form class="app-print">
            <div class="task-bar">
                <label for="task-input"><i class="fa-regular fa-pen-to-square"></i></label>
                <input type="text" id="task-input" class="task-input" required>
                <button type="submit"><i class="fa-solid fa-plus"></i></button>
            </div>
            <div id="task-show" class="task-show">
            </div>
        </form>`;
    } 
    else if (appObj.type == "links") {
        app.innerHTML = `<input type="checkbox" id="${appId}-title" class="dpnone">
        <div class="app-header">
        <label for="${appId}-title" class="app-title toggle">${appObj.name}</label>
        <input type="checkbox" id="${appId}-set" class="dpnone">
        <label for="${appId}-set" class="app-set-icon toggle">i</label>
        </div>
        <form class="app-print">
            <div>
                <input id="quicklink-input-title" type="text" placeholder="Name" required="">
                <input id="quicklink-input-url" type="url" placeholder="URL" required="">
            </div>
            <button><i class="fa-solid fa-plus"></i></button>
        </form>`;
        //Individual obj
        const indiObjArr = [];
        localStorage.setItem(`${appId}`, JSON.stringify(indiObjArr));
    } 
    
    sectionC.appendChild(app);
    
}
function loadAppsArr() {
    const appsArrJson = localStorage.getItem('appsArr');
    if (appsArrJson) {
        appsArr = JSON.parse(appsArrJson);
        appsArr.forEach(appObj => printApp(appObj));
        console.log(appsArr);
    }
}

loadAppsArr(); // 페이지 로드 시 appsArr 복원

// -------------------------------------------------------

let draggedApp = null;

sectionC.addEventListener('dragstart', dragStart);
sectionC.addEventListener('dragover', dragOver);
sectionC.addEventListener('drop', drop);

function dragStart(event) {
    draggedApp = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', '');
    const pick = {
        id: draggedApp.id,
        type: draggedApp.getAttribute('data-type'),
        name: draggedApp.querySelector('.app-title').innerText,
        section: 'c',
        statu: 'open'
    };
    console.log(pick);
}

function dragOver(event) {
    event.preventDefault();
    const afterElement = getDragAfterElement(event.clientY);
    const isSameContainer = afterElement?.parentNode === sectionC;

    if (isSameContainer) {
        sectionC.insertBefore(draggedApp, afterElement);
    }
}

function drop(event) {
    event.preventDefault();
    const afterElement = getDragAfterElement(event.clientY);
    const isSameContainer = afterElement?.parentNode === sectionC;

    if (isSameContainer) {
        sectionC.insertBefore(draggedApp, afterElement);
    }

    updateAppsArrOrder(); // 드롭 후 appsArr 순서 업데이트
    saveAppsArr(); // appsArr 저장
}

function updateAppsArrOrder() {
    appsArr = Array.from(sectionC.querySelectorAll('.app')).map(app => {
        return {
            id: app.id,
            type: app.getAttribute('data-type'),
            name: app.querySelector('.app-title').innerText,
            section: 'c',
            statu: 'open'
        };
    });
}

function getDragAfterElement(y) {
    const draggableElementsArr = Array.from(sectionC.querySelectorAll('.app')).filter(element => element !== draggedApp);
    return draggableElementsArr.reduce((closest, element) => {
        const box = element.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: element };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

function saveAppsArr() {
    localStorage.setItem('appsArr', JSON.stringify(appsArr));
}