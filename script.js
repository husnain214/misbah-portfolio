const hamburgerDiv = document.querySelector(".hamburger-div")
const hamburgerBtn = document.querySelector(".hamburger")
const closeBtn = document.querySelector(".close-btn")
const navbar = document.querySelector ("nav")
const sections = document.querySelectorAll ("section")

let sectionOptions = {
    rootMargin: "-100px 0px 0px 0px",
    threshold: 0
}

hamburgerBtn.addEventListener ("click", () => {
    hamburgerDiv.classList.remove ("right-to-left")
    hamburgerDiv.classList.add ("left-to-right")
    hamburgerDiv.classList.remove ("hidden")
})

closeBtn.addEventListener ("click", () => {
    hamburgerDiv.classList.add ("right-to-left")
    hamburgerDiv.classList.remove ("left-to-right")
    setTimeout (() => hamburgerDiv.classList.add ("hidden"), 500)
})

const observer = new IntersectionObserver ((entries, observer) => {
    entries.forEach ((entry) => {
        if (entry.target.className === "work-section") {
            if (entry.isIntersecting) {
                entry.target.childNodes[3].classList.add ("opacityAnimate")
                entry.target.childNodes[3].style.animationDuration = "1s"
            } 
        }
        else if (entry.target.className === "about-me-section") {
            if (entry.isIntersecting) {
                entry.target.childNodes[1].childNodes[1].classList.add("opacityAnimate")
                entry.target.childNodes[1].childNodes[3].classList.add("moveAnimate")
            } 
        }
        else if (entry.target.className === "contact-section") {
            if (entry.isIntersecting) {
                entry.target.childNodes[1].childNodes[1].classList.add ("moveAnimate")
                entry.target.childNodes[1].childNodes[5].classList.add ("opacityAnimate")
                entry.target.childNodes[1].childNodes[5].style.transitionDuration = ".8s"
            }
        }
    }
)}, sectionOptions)

sections.forEach (section => {
    observer.observe (section)
})

