let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')


function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)



const slides = document.querySelectorAll('.offer__slide');
let slidesindex = 0;

let num_picture = document.querySelector('#current')


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slidesindex].classList.remove('hide');

const next_btn = document.querySelector('.offer__slider-next');
const prev_btn = document.querySelector('.offer__slider-prev');




function slidesshow(n) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    });

    slidesindex = (slides.length + slidesindex + n) % slides.length;
    slides[slidesindex].classList.remove('hide');
}

next_btn.onclick = () => {
    slidesshow(1);
    num_picture.innerText = "0" + slidesindex
};

prev_btn.onclick = () => {
    slidesshow(-1);
    num_picture.innerText = "0" + slidesindex

};

const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')


function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader_item_active'))
        btn.classList.add('tavheader__item_active')
        showTabs(idx)
    }
})






const gender_btns = document.querySelectorAll('#gender div')
const inputs = document.querySelectorAll('.calculating__choose_medium input')
const cardio_btns = document.querySelectorAll('.calculating__choose_big div')
const result_view = document.querySelector('#result_view')


let user = {
    gender: 'woman'
}

gender_btns.forEach(btn => {
    btn.onclick = () => {
        gender_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        user.gender = btn.getAttribute('data-g')
    }
})

inputs.forEach(inp => {
    inp.oninput = () => {
        user[inp.id] = inp.value
    }
})


cardio_btns.forEach(btn => {
    btn.onclick = () => {
        cardio_btns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let cardio = btn.getAttribute('data-cardio')

        if (user.gender === "woman") {
            let result = 655.1 + (9.563 * user.weight) + (1.85 * user.height) - (4.676 * user.age);

            result_view.innerHTML = Math.round(result * cardio)
        } else {
            let result = 66.5 + (13.75 * user.weight) + (5.003 * user.height) - (6.775 * user.age);

            result_view.innerHTML = Math.round(result * cardio)
        }
    }

})





function setTimer() {
    const daysElement = document.querySelector('#days');
    const hoursElement = document.querySelector('#hours');
    const minutesElement = document.querySelector('#minutes');
    const secondsElement = document.querySelector('#seconds');

   

    let days = parseInt(daysElement.textContent, 10);
    let hours = parseInt(hoursElement.textContent, 10);
    let minutes = parseInt(minutesElement.textContent, 10);
    let seconds = parseInt(secondsElement.textContent, 10);

    seconds--;

    if (seconds < 0) {
        seconds = 59;
        minutes--;

        if (minutes < 0) {
            minutes = 59;
            hours--;

            if (hours < 0) {
                hours = 23;
                days--;

                if (days < 0) {
                    alert('🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊🎊');
                    return;
                
                }
            }
        }
    }

    daysElement.textContent = nol(days);
    hoursElement.textContent = nol(hours);
    minutesElement.textContent = nol(minutes);
    secondsElement.textContent = nol(seconds);
}

function nol(number) {
    return (number < 10 ? '0' : '') + number;
}

 setInterval(setTimer, 1000)