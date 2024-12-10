const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
    if (btn.innerHTML === "Dark") {
        btn.innerHTML = "Light";  
        document.body.style.backgroundColor = "black";  
        document.body.style.color = "white";  
    } else {
        btn.innerHTML = "Dark"; 
        document.body.style.backgroundColor = "white"; 
        document.body.style.color = "black"; 
    }
});
