function appModal(appID) {
    // console.log(event);
    // console.log(event.target.value);
    // console.log(event.target.checked);
    // const appID = event.dataset.group;
    console.log(appID);
    const dialog = document.querySelector(`#dialog-${appID}`);
    dialog.showModal();
    console.log(dialog);
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

function modalTitle() {
    
}