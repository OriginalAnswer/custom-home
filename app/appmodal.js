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

function modalDel(appID) {
    const thisapp = document.querySelector(`#app-${appID}`);
    
    let currentAppJSON = localStorage.getItem('appsArr');
    let parsedCurrentAppData = JSON.parse(currentAppJSON);
    console.log(parsedCurrentAppData);
    parsedCurrentAppData = parsedCurrentAppData.filter(t => t.id !== parseInt(appID));
    let reArr = parsedCurrentAppData;
    console.log(reArr);
    thisapp.remove();
    localStorage.setItem('appsArr', JSON.stringify(reArr));
    localStorage.removeItem(appID)
    
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