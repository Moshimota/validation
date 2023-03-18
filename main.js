const siuu1 = document.querySelector(".siuu")
const siuu2 = document.querySelector(".siuuuu")
const siuuFunc = ()=> {
    if(!siuu1.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        siuu2.innerHTML = "Mazgiii emailni yozishni bilmisanmi togri yoz mazgi"
        siuu1.style.borderBottomColor = "red"
        siuu2.style.color = "red"
        siuu2.style.opacity = "1"
        return false
    }else{
        siuu1.style.borderBottomColor = "green"
        siuu2.innerHTML = "Mazgi siz emailni to'gri yozdiz"
        siuu2.style.color = "green"
        siuu2.style.opacity = "1"
        return true
    }
}