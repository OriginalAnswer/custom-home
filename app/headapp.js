// --------------------------
const headTextInput = document.querySelector("#set-headtext");
const appHeadText = document.querySelector(".app-headtext");
const headtextFontsize = document.querySelector("#headtext-fontsize");

const HEADTEXT_KEY = "headtext"
const savedHeadText = localStorage.getItem(HEADTEXT_KEY);
const savedHeadTextText = localStorage.getItem(HEADTEXT_KEY,'text');
const savedHeadTextFontsize = localStorage.getItem(HEADTEXT_KEY,'fontsize');
const parsedHeadText = JSON.parse(savedHeadText);//객체 분석하기

function printHeadText(txt, size) {
    appHeadText.innerText = txt;
    appHeadText.style.fontSize = `${size}px`;
}
if (savedHeadText !== null) {
    const txt = parsedHeadText.text;
    const size = parsedHeadText.fontsize;
    printHeadText(txt, size);
    // headTextInput.setAttribute('placeholder', `${txt}`)
    headTextInput.setAttribute('value', `${txt}`)
    headtextFontsize.setAttribute('value', `${size}`)
}
function syncHeadText() {
    let syncText = headTextInput.value;
    let syncFontsize = headtextFontsize.value;
    const headtextObj = {
        text: syncText,
        fontsize: syncFontsize
    };
    appHeadText.innerText = `${syncText}`;
    localStorage.setItem(HEADTEXT_KEY, JSON.stringify(headtextObj));
    // headTextInput.setAttribute('placeholder', `${syncText}`);
}

function syncHeadTextFontsize() {
    let syncFontsize = headtextFontsize.value;
    let syncText = headTextInput.value;
    
    const headtextObj = {
        text: syncText,
        fontsize: syncFontsize
    }
    localStorage.setItem(HEADTEXT_KEY, JSON.stringify(headtextObj));
    appHeadText.style.fontSize = `${syncFontsize}px`;
}

// --------------------------
const greetName = document.querySelector(".app-greet-name");
const greetInput = document.querySelector("#set-greet-name");

const GREET_NAME_KEY = "greet name"
const savedGreetName= localStorage.getItem(GREET_NAME_KEY);
// const parsedGreetName = JSON.parse(savedGreetName);//객체 분석하기

function printGreet() {
    greetName.innerText = `, ${savedGreetName}`;
}
if (savedGreetName !== null) {
    printGreet();
    greetInput.setAttribute('value', `${savedGreetName}`)
}
function syncGreetName() {
    let syncText = greetInput.value;
    greetName.innerText = `, ${syncText}.`;
    localStorage.setItem(GREET_NAME_KEY, syncText);
    greetInput.setAttribute('value', `${syncText}`)
}

const greet = document.querySelector('.greet');

function changeGreeting(){
    const date = new Date();
    const h = date.getHours(); 
    
    if(h<4){
        greet.innerText = 'Good Night';
    }else if(h<7){
        greet.innerText = 'Good Dream';
    }else if(h < 12){
        greet.innerText = 'Good Morning';
    } else if (h < 18) {
        greet.innerText = 'Good Afternoon';
    } else if(h<21){
        greet.innerText = 'Good Evening';
    }else{
        greet.innerText = 'Good Night';
    }
}
changeGreeting();

//----------------------------------
const headTimeSize = document.querySelector("#headtime-fontsize");
const HEADTIME_KEY = 'headtime';
const savedHeadTime = localStorage.getItem(HEADTIME_KEY);
const savedHeadTimeSize = localStorage.getItem(HEADTIME_KEY, 'fontsize');
const parsedHeadTime = JSON.parse(savedHeadTime);//객체 분석하기
const appHeadTime = document.querySelector('#app-headtime');
function syncHeadTimeSize() {
    let syncTimeSize = headTimeSize.value;
    const headTimeObj = {
        fontsize: syncTimeSize
    }
    appHeadTime.style.fontSize = `${syncTimeSize}px`;
    localStorage.setItem(HEADTIME_KEY, JSON.stringify(headTimeObj));
}
if (savedHeadTime !== null) {
    const size = parsedHeadTime.fontsize;
    headTimeSize.setAttribute('value', `${size}`)
    appHeadTime.style.fontSize = `${size}px`;
}

// -----------------------------------
const HEADAPP_KEY = 'headapp';
const savedHeadapp = localStorage.getItem(HEADAPP_KEY);
const savedHeadappAlign = localStorage.getItem(HEADAPP_KEY, 'align');
const parsedHeadapp = JSON.parse(savedHeadapp);
const headapps = document.querySelector('.headapps');
const labels = document.querySelectorAll('.set-headapp label'); // 라벨 요소들을 선택합니다.

function handleAlignHeadapp(value) {
    const headappObj = {align: value};
    localStorage.setItem(HEADAPP_KEY, JSON.stringify(headappObj));
    if (value === 'left') {
        headapps.style.textAlign = 'left';
    } else if (value === 'center') {
        headapps.style.textAlign = 'center';
    } else if (value === 'right') {
        headapps.style.textAlign = 'right';
    }

    // 라벨의 색상을 변경합니다.
    labels.forEach(label => {
        if (label.htmlFor === `haedapp-align-${value}`) {
            label.style.color = 'red';
        } else {
            label.style.color = '';
        }
    });
}

if (savedHeadapp !== null) {
    const align = parsedHeadapp.align;
    headapps.style.textAlign = align;

    // 초기 로드 시 라벨의 색상을 설정합니다.
    labels.forEach(label => {
        if (label.htmlFor === `haedapp-align-${align}`) {
            label.style.color = 'red';
        } else {
            label.style.color = '';
        }
    });
}

// 드래그 앤 드롭*********************
