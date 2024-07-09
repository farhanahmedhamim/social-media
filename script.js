const look = document.querySelector(".look")
const dontlook = document.querySelector(".dontlook")
const hide = document.querySelectorAll(".hide")


const nones = document.querySelector(".nones")
const botos = document.querySelector(".botos")
const left = document.querySelector(".aside-left")
const right = document.querySelector(".aside-right")
const overlay = document.querySelector(".overlay")



look.addEventListener("click", () => {
    hide.forEach(val => {
        val.style = `display: flex;`
    })
    look.style = `display: none;`
    dontlook.style = `display: flex;`
})



dontlook.addEventListener("click", () => {
    hide.forEach(val => {
        val.style = `display: none;`
    })
    look.style = `display: flex;`
    dontlook.style = `display: none;`
})



nones.addEventListener("click", () => {
    right.classList.add("mores")
    overlay.classList.add("mores")
})


overlay.addEventListener("click", () => {
    right.classList.remove("mores")
    overlay.classList.remove("mores")
})


botos.addEventListener("click", () => {
    left.classList.add("mores")
    overlay.classList.add("mores")
})

overlay.addEventListener("click", () => {
    left.classList.remove("mores")
    overlay.classList.remove("mores")
})