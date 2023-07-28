function apptext(v,n) {
    console.log(v);
    console.log(n);
    // const currentTextNode = document.getElementById(e);
    // console.log(currentTextNode);
    const reObj = {
        id: n,
        type: "memo",
        content: v
    }
    localStorage.setItem(n, JSON.stringify(reObj));
}