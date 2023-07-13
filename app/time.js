
function getTime() {
    const time = document.querySelector('#app-time');
    const date = new Date();
    const h = String(date.getHours()).padStart(2,"0");
    const m = String(date.getMinutes()).padStart(2,"0");
    const s = String(date.getSeconds()).padStart(2,"0");
    time.innerText = `${h} : ${m} : ${s}`;
}

getTime();
setInterval(getTime, 1000);