// new task app for a test.
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
    createAppElement(newappObj); // 새로운 앱 요소 생성 및 추가
    saveAppsArr(); // appsArr 저장
    newtask(newappObj);

    const newAppToggle = document.getElementById('newapptoggle');
    if (newAppToggle) {
        newAppToggle.checked = false;
    }

}

function createAppElement(appObj) {
    const appElement = document.createElement('div');
    appElement.classList.add('app');
    appElement.draggable = true;

    const checkboxPrintToggle = document.createElement('input');
    checkboxPrintToggle.type = 'checkbox';
    checkboxPrintToggle.id = `${appObj.id}-title`;
    checkboxPrintToggle.classList.add('dpnone');

    const appHeader = document.createElement('div');
    appHeader.classList.add('app-header');

    const labelAppTitle = document.createElement('label');
    labelAppTitle.setAttribute('for', `${appObj.id}-title`);
    labelAppTitle.classList.add('app-title','toggle');
    labelAppTitle.innerText = appObj.name;

    const checkboxSetToggle = document.createElement('input');
    checkboxSetToggle.type = 'checkbox';
    checkboxSetToggle.id = `${appObj.id}-set`;
    checkboxSetToggle.classList.add('dpnone');

    const labelAppSetIcon = document.createElement('label');
    labelAppSetIcon.setAttribute('for', `${appObj.id}-set`);
    labelAppSetIcon.classList.add('app-set-icon','toggle');
    labelAppSetIcon.innerText = 'i';

    const appPrint = document.createElement('div');
    appPrint.classList.add('app-print');

    appHeader.appendChild(labelAppTitle);
    appHeader.appendChild(checkboxSetToggle);
    appHeader.appendChild(labelAppSetIcon);

    appElement.appendChild(checkboxPrintToggle);
    appElement.appendChild(appHeader);
    appElement.appendChild(appPrint);

    sectionC.appendChild(appElement);
}

function loadAppsArr() {
    const appsArrJson = localStorage.getItem('appsArr');
    if (appsArrJson) {
        appsArr = JSON.parse(appsArrJson);
        appsArr.forEach(appObj => createAppElement(appObj));
    }
}

loadAppsArr(); // 페이지 로드 시 appsArr 복원

let draggedApp = null;

sectionC.addEventListener('dragstart', dragStart);
sectionC.addEventListener('dragover', dragOver);
sectionC.addEventListener('drop', drop);

function dragStart(event) {
    draggedApp = event.target;
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', '');
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
    appsArr = Array.from(sectionC.querySelectorAll('.app')).map(appElement => {
        return {
            id: parseInt(appElement.id),
            type: appElement.getAttribute('data-type'), // 예를 들어, 'task', 'checklist' 등
            name: appElement.querySelector('.app-title').innerText,
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

// newappPrint(newappObj);
// saveApp();