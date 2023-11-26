const navbarEl = document.querySelector(".navbar");




const workingEl = document.querySelector(".working");

console.log(navbarEl.offsetHeight);

console.log(workingEl.offsetTop);

window.addEventListener("scroll", () => {

    if (window.scrollY > workingEl.offsetTop - navbarEl.offsetHeight - 50) {
        navbarEl.classList.add("active")
    }
    else {
        navbarEl.classList.remove("active");
    }
    // console.log(window.scrollY);
})

function navigate(url) {
    // Use window.location.href to navigate to the specified URL
    window.location.href = url;
}

document.getElementById("react").addEventListener("click", () => {

    navigate("http://localhost:5173/");
})