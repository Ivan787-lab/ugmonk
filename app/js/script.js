document.querySelector(".clothes-container__nav").addEventListener("click" , function () {
    if (event.target.classList.contains("nav__setings-link_default")) {
        let activeLinks = document.querySelectorAll(".nav__setings-link_active")
        if (activeLinks.length > 0) {
            for (let i = 0; i < activeLinks.length; i++) {
                activeLinks[i].classList.remove("nav__setings-link_active")
                activeLinks[i].classList.add("nav__setings-link_disabled")
            }
        }
        event.target.classList.toggle("nav__setings-link_active")
    }
})

