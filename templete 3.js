let headerLogo = document.querySelector('.elzero h3')
headerLogo.onclick = function () {
    window.location.reload()
}
///////////////////////////////////////////////////////////
let dateStart = new Date('Dec 31, 2022 23:59:59').getTime();

let count = setInterval(() => {
    let dateEnd = new Date().getTime();
    let diffTime = dateStart - dateEnd;

    let days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diffTime % (1000 * 60) / 1000));
    document.querySelector('.day').innerHTML = `${days}` < 10 ? `0${days}` : days;
    document.querySelector('.Hours').innerHTML =`${hours}` < 10 ? `0${hours}` : hours;
    document.querySelector('.minutes').innerHTML = `${minutes}` < 10 ? `0${minutes}` : minutes;
    document.querySelector('.seconds').innerHTML = `${seconds}` < 10 ? `0${seconds}` : seconds;
    if (diffTime <= 0) {
        clearInterval(count);
    }
    days = `${days} Days`
    hours = `${hours} Hours`
    minutes = `${minutes} Minutes`
    seconds = `${seconds} Seconds`
}, 1000);
let sub = document.querySelectorAll('.sub')
console.log(sub)
////////////////////////////////////////////
let boxs = document.querySelectorAll('.boxs h3')
let stats = document.querySelector('.stats')
let stop = false;

window.onscroll = function () {
    if (window.scrollY >= stats.offsetTop - 200){
        if (!stop) {
            boxs.forEach((i) => Timer(i));
        }
        stop = true
    }
}
function Timer(el) {
    let goal = el.dataset.goal
    let counter = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(counter)
        }
    }, 1000 / goal);
}
//////////////////////////////////////////////////////////////
let skills = document.querySelector('.skills')
let spanWidth = document.querySelectorAll('.content .box span')

window.onscroll = function () {
    if (window.scrollY >= skills.offsetTop) {
        spanWidth.forEach((e) => {
            e.style.width = e.dataset.width
        })
    }
};
////////////////////////////////////////////////////////

