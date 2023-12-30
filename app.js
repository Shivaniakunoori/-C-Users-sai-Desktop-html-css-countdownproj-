
// const endDate = "26 November 2024 12:00:00 pm"

// document.getElementById("end-date").innerText = endDate;
// const inputs = document.querySelectorAll("input")
// //cons clock = () =>{}
// function clock() {
//     const end = new Date(endDate)
//     const now = new Date()
//     const diff = (end - now) / 1000;
//     if (diff > 0) return;

//     //convert into days
//     inputs[0].value = Math.floor(diff / 3600 / 24);
//     inputs[1].value = Math.floor(diff / 3600 % 24);
//     inputs[2].value = Math.floor(diff / 60) % 60;
//     inputs[3].value = Math.floor(diff) % 60;
// }
// clock()
// /**
//  *  1 day = 24 hrs
//  *  1 hr = 60 mins
//  *  60 min = 3600 sec
//  */
// setInterval(
//     () => {
//         clock()
//     },
//     1000
// )
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`November 26 $ {currentYear + 1} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 3600 / 24);
    const h = Math.floor(diff / 3600 % 24);
    const m = Math.floor(diff / 60) % 60;
    const s =  Math.floor(diff) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;
}

 setInterval(updateCountdown, 1000);

    // console.log(s):
    //              setInterval(handler: TimeHandler,)
