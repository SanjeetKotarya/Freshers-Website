fetch('Home/home.html')
    .then(res => res.text())
    .then(text => {
        let oldelem = document.querySelector("script#home-section");
        let newelem = document.createElement("div");
        newelem.innerHTML = text;
        oldelem.parentNode.replaceChild(newelem, oldelem);
    })



    