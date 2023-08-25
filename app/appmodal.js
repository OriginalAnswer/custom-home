function appModal(appId,n) {
    // console.log(event);
    // console.log(event.target.value);
    // console.log(event.target.checked);
    // const appID = event.dataset.group;
    // console.log(appId);
    const dialog = document.querySelector(`#dialog-${appId}`);
    dialog.showModal();
    // console.log(dialog);


    const titleInput = document.querySelector(`#dialog-title-${appId}`);
    titleInput.setAttribute('value', n);
    
    // const title = document.querySelector(`dialog-title-${appId}`);
}

function modalDel(appId) {
    const thisapp = document.querySelector(`#app-${appId}`);
    
    let currentAppJSON = localStorage.getItem('appsArr');
    let parsedCurrentAppData = JSON.parse(currentAppJSON);
    let arr = parsedCurrentAppData;
    console.log(arr);
    let thisObj = arr.find(e => e.id == appId);
    const n = arr.indexOf(thisObj);
    arr.splice(n);
    console.log(arr);
    
    // arr = arr.filter(t => t.id !== parseInt(appId));
    // console.log(arr);
    let reArr = arr;

    // console.log(reArr);

    thisapp.remove();
    localStorage.removeItem(appId);
    localStorage.setItem('appsArr', JSON.stringify(reArr));
}
function modalSave(a) {
    const dialog = document.querySelector(`#${a}`);
    console.log(dialog.returnValue);
}

function modalTitle(appId,n) {
    // console.log(n);
    let currentAppJSON = localStorage.getItem('appsArr');
    let arr = JSON.parse(currentAppJSON);
    let thisObj = arr.find(e => e.id == appId);
    // console.log(arr);
    
    thisObj.name = n;
    console.log(thisObj.name);
    const title = document.querySelector(`.app-title-${appId}`);
    title.innerText = n;
    
    
    arr.map((item) => item.id === appId ? { ...item, name: n } : item);
    // console.log(arr);

    localStorage.setItem('appsArr', JSON.stringify(arr));
}