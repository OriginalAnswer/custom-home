function apptext(v,n) {
    // console.log(v);
    const reObj = {
        id: n,
        type: "memo",
        content: v
    }
    localStorage.setItem(n, JSON.stringify(reObj));
    
    let textarea = document.getElementById(`app-${n}`);
    textarea.addEventListener("keyup", e => {
        textarea.style.height = 'auto';
        let scHeight = e.target.scrollHeight;
        textarea.style.height = `${scHeight}px`;
    })
}
