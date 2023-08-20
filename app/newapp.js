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
    app.id = `app-${appId}`;
    app.draggable = true;
    app.dataset.type = appObj.type;
    if (appObj.type == 'memo') {
        // <label for="title-${appId}" class="app-title toggle">${appObj.name}</label>
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>

            <button onclick="appModal(${appId})" class="app-set-icon app-set toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <dialog id="dialog-${appId}">
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
                <div class="dialog-align">
                    <label for="set-align-${appId}">정렬</label>
                    <input type="text" id="set-align-${appId}" oninput="">
                </div>
                <div class="dialog-font">
                    <label for="set-font-${appId}">폰트</label>
                    <input type="text" id="set-font-${appId}" oninput="">
                </div>
                <div class="dialog-fonttype">
                    <label for="set-fonttype-${appId}">폰트 타입</label>
                    <input type="text" id="set-fonttype-${appId}" oninput="">
                </div>
                <div class="dialog-fontsize">
                    <label for="set-fontsize-${appId}">폰트 사이즈</label>
                    <input type="text" id="set-fontsize-${appId}" oninput="">
                </div>
            </dialog>
        </div>
        <div class="app-print">
            <textarea id="${appId}" oninput="apptext(this.value, ${appId})" rows="1" placeholder="type here..."></textarea>
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
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>
            <label for="title-${appId}" class="app-title app-set toggle">${appObj.name}</label>

            <button onclick="appModal(${appId})" class="app-set-icon  toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <dialog id="dialog-${appId}">
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
                <div class="dialog-align">
                    <label for="set-align-${appId}">정렬</label>
                    <input type="text" id="set-align-${appId}" oninput="">
                </div>
                <div class="dialog-font">
                    <label for="set-font-${appId}">폰트</label>
                    <input type="text" id="set-font-${appId}" oninput="">
                </div>
                <div class="dialog-fonttype">
                    <label for="set-fonttype-${appId}">폰트 타입</label>
                    <input type="text" id="set-fonttype-${appId}" oninput="">
                </div>
                <div class="dialog-fontsize">
                    <label for="set-fontsize-${appId}">폰트 사이즈</label>
                    <input type="text" id="set-fontsize-${appId}" oninput="">
                </div>
            </dialog>
        </div>

        <div class="app-print">

            <form class="task-bar" id="form-${appId}" name="${appId}" onsubmit="appTask()">
                <label for="input-${appId}"><i class="fa-regular fa-pen-to-square"></i></label>
                <input type="text" id="input-${appId}" name="${appId}" class="task-input" required>
                <button type="submit" name="${appId}"" ><i class="fa-solid fa-plus"></i></button>
            </form>

            <div class="show-${appId} task-show"></div>
        </div>`;
        //Individual obj
        const indiObjArr = [];
        // const indiObj = {
        //     id: Date.now(),
        //     content: "test"
        // }
        // indiObjArr.push(indiObj)
        // printTask(appId);
        localStorage.setItem(`${appId}`, JSON.stringify(indiObjArr));
    } 
    else if (appObj.type == "links") {
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>
            <label for="title-${appId}" class="app-title app-set toggle">${appObj.name}</label>

            <button onclick="appModal(${appId})" class="app-set-icon  toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <dialog id="dialog-${appId}">
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
                <div class="dialog-align">
                    <label for="set-align-${appId}">정렬</label>
                    <input type="text" id="set-align-${appId}" oninput="">
                </div>
                <div class="dialog-font">
                    <label for="set-font-${appId}">폰트</label>
                    <input type="text" id="set-font-${appId}" oninput="">
                </div>
                <div class="dialog-fonttype">
                    <label for="set-fonttype-${appId}">폰트 타입</label>
                    <input type="text" id="set-fonttype-${appId}" oninput="">
                </div>
                <div class="dialog-fontsize">
                    <label for="set-fontsize-${appId}">폰트 사이즈</label>
                    <input type="text" id="set-fontsize-${appId}" oninput="">
                </div>
            </dialog>
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
    app.id = `app-${appId}`;
    app.draggable = true;
    app.dataset.type = appObj.type;
    app.dataset.group = appId;

    const currentAppDataJSON = localStorage.getItem(appId);
    const parsedCurrentAppData = JSON.parse(currentAppDataJSON);
    console.log(currentAppDataJSON);
    console.log(parsedCurrentAppData);


    if (appObj.type == "memo") {
        const currentContent = parsedCurrentAppData.content;
        // <label for="title-${appId}" class="app-title toggle">${appObj.name}</label>
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>
            <button onclick="appModal(${appId})" class="app-set-icon app-set toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>
            <dialog id="dialog-${appId}">
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
                <div class="dialog-align">
                    <label for="set-align-${appId}">정렬</label>
                    <input type="text" id="set-align-${appId}" oninput="">
                </div>
                <div class="dialog-font">
                    <label for="set-font-${appId}">폰트</label>
                    <input type="text" id="set-font-${appId}" oninput="">
                </div>
                <div class="dialog-fonttype">
                    <label for="set-fonttype-${appId}">폰트 타입</label>
                    <input type="text" id="set-fonttype-${appId}" oninput="">
                </div>
                <div class="dialog-fontsize">
                    <label for="set-fontsize-${appId}">폰트 사이즈</label>
                    <input type="text" id="set-fontsize-${appId}" oninput="">
                </div>
            </dialog>
        </div>
        <div class="app-print">
            <textarea id="${appId}" oninput="apptext(this.value, ${appId})" rows="1" placeholder="type here...">${currentContent}</textarea>
        </div>
        `;
        function appMemoResize() {
            let textarea = document.getElementById(`${appId}`);    
         
            let scHeight = textarea.scrollHeight;
            let style = window.getComputedStyle(textarea);
            let borderTop = parseInt(style.borderTop);
            let borderBottom = parseInt(style.borderBottom);
     
            textarea.style.height = (scHeight + borderTop + borderBottom)+"px";
        }
        window.addEventListener("load", appMemoResize);
        window.onresize = appMemoResize;
    
    } 
    else if (appObj.type == "task") {
        // console.log(parsedCurrentAppData);
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>
            <label for="title-${appId}" class="app-title toggle">${appObj.name}</label>

            <button onclick="appModal(${appId})" class="app-set-icon app-set toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <dialog id="dialog-${appId}">
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
                <div class="dialog-align">
                    <label for="set-align-${appId}">정렬</label>
                    <input type="text" id="set-align-${appId}" oninput="">
                </div>
                <div class="dialog-font">
                    <label for="set-font-${appId}">폰트</label>
                    <input type="text" id="set-font-${appId}" oninput="">
                </div>
                <div class="dialog-fonttype">
                    <label for="set-fonttype-${appId}">폰트 타입</label>
                    <input type="text" id="set-fonttype-${appId}" oninput="">
                </div>
                <div class="dialog-fontsize">
                    <label for="set-fontsize-${appId}">폰트 사이즈</label>
                    <input type="text" id="set-fontsize-${appId}" oninput="">
                </div>
            </dialog>
        </div>
        <div class="app-print">
            <form class="task-bar" id="form-${appId}" name="${appId}" onsubmit="appTask()">
                <label for="input-${appId}"><i class="fa-regular fa-pen-to-square"></i></label>
                <input type="text" id="input-${appId}" name="${appId}" class="task-input" required>
                <button type="submit" name="${appId}" ><i class="fa-solid fa-plus"></i></button>
            </form>
            <div class="show-${appId} task-show"></div>
        </div>`;
                 
    } 
    else if (appObj.type == "links") {
        app.innerHTML = `
        <div class="app-header">
            <input type="checkbox" id="title-${appId}" class="dpnone" onchange="">
            <input type="checkbox" id="set-${appId}" class="dpnone" onclick="del(${appId})">

            <label for="set-${appId}" class="app-set-icon app-del toggle">x</label>
            <label for="title-${appId}" class="app-title app-set toggle">${appObj.name}</label>

            <button onclick="appModal(${appId})" class="app-set-icon  toggle">
                <i class="fa-solid fa-ellipsis-vertical"></i>
            </button>

            <dialog id="dialog-${appId}">
            앱 타이틀/텍스트얼라인/폰트사이즈*굵기*기울기/삭제
                <div class="dialog-title">
                    <label for="set-title-${appId}">제목</label>
                    <input type="text" id="set-title-${appId}" oninput="">
                </div>
            </dialog>
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
    // const currentShow = document.querySelector(`.show-${appId}`);
    // console.log(currentShow);
    if (appObj.type == "task") {   
        parsedCurrentAppData.forEach(element => printTask(element, `show-${appId}`, appId));
    }
    // printTask(parsedCurrentAppData, `show-${appId}`, appId);//어레이, 클래스, 아이디
}
function loadAppsArr() {
    const appsArrJson = localStorage.getItem('appsArr');
    if (appsArrJson) {
        appsArr = JSON.parse(appsArrJson);
        console.log(appsArr);
        appsArr.forEach(appObj => printApp(appObj));
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
        id: draggedApp.dataset.group,
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
            id: app.dataset.group,
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

