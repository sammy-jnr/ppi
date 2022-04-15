let menuimg = document.getElementById("menuimg")
let closeimg = document.getElementById("closeimg")
let menutab = document.getElementById("menutab")

//open and close menu tab
menuimg.addEventListener("click",openmenutab)
function openmenutab() {
    menuimg.style.display = "none"
    closeimg.style.display = "block"
    menutab.style.display = "block"
}
closeimg.addEventListener("click",closemenutab)
function closemenutab() {
    menuimg.style.display = "block"
    closeimg.style.display = "none"
    menutab.style.display = "none"
}

//changing active page

let container = document.getElementById("container")

let menutabitems_About =  document.getElementById("menutabitems_About")
let menutabitems_home =  document.getElementById("menutabitems_home")
let menutabitems_contact =  document.getElementById("menutabitems_contact")
let homePage =  document.getElementById("homePage")
let aboutPage =  document.getElementById("about")
let contactform =  document.getElementById("contactform")


menutabitems_About.addEventListener("click",()=>{
    closemenutab()
    aboutPage.style.display = "block"
    homePage.style.display = "none"
    contactform.style.display = "none"
})

menutabitems_home.addEventListener("click",()=>{
    closemenutab()
    aboutPage.style.display = "none"
    homePage.style.display = "block"
    contactform.style.display = "none"
})

menutabitems_contact.addEventListener("click",()=>{
    closemenutab()
    aboutPage.style.display = "none"
    homePage.style.display = "none"
    contactform.style.display = "block"
})

