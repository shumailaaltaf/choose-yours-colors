const menu = document.querySelector('#mobile-menu')
const menulinks = document.querySelector('.navbar--menu')
const navlogo = document.querySelector('#navbar--logo')
//display mobile menu
const mobilemenu = () =>{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
}

menu.addEventListener('click.mobilemenu')

//show active manue
const hightlighMenu = ()=> {
    const elem = document.querySelector ('highlight')
    const homeMenu = document.querySelector ('#home-page')
    const aboutMenu = document.querySelector ('#About-page')
    const serviceMenu = document.querySelector ('Services-page')
    let scrollpos = window.scrollY

    //adds highlights
    if (window.innerWidth > 960 && scrollpos < 600){
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
} else if (window.innerWidth>960 && scrollpos < 1400){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    serviceMenu.classList.remove('highlight') 
    return
} 
else if (window.innerWidth>960 && scrollpos < 2345){
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    serviceMenu.classList.remove('highlight') 
    return
}
if((elme && window.innerwidth <960 && scrollpos < 600) || elem){

}


}
