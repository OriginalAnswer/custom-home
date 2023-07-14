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
    headTextInput.setAttribute('placeholder', `${txt}`)
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
    headTextInput.setAttribute('placeholder', `${syncText}`);
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
// const greetInput = document.querySelector("#set-greet");
// const appGreet = document.querySelector(".app-greet");

// const GREET_KEY = "greet name"
// const savedGreet= localStorage.getItem(GREET_KEY);

// function printGreet() {
//     appGreet.innerText = `${savedGreet}`;
// }
// if (savedGreet !== null) {
//     printGreet();
//     greetInput.setAttribute('placeholder', `${savedGreet}`)
// }
// function syncGreet() {
//     let syncText = greetInput.value;
//     appGreet.innerText = `${syncText}`;
//     localStorage.setItem(GREET_KEY, syncText);
//     greetInput.setAttribute('placeholder', `${syncText}`)
// }

const greet = document.querySelector('.app-greet');

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
// -----------------------------------

function headappAlign(value) {
    const appHeadtext = document.querySelector(".headapps");
    if (value === 'left') {
        appHeadtext.style.textAlign = 'left';
      } else if (value === 'center') {
        appHeadtext.style.textAlign = 'center';
      } else if (value === 'right') {
        appHeadtext.style.textAlign = 'right';
      }
}


//----------------------------------

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
