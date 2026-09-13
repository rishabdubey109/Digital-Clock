let is24Hour = false;


function updateClock() {

    let currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let ampm = "AM";


    if (hours >= 12) {
        ampm = "PM";
    }


    if (!is24Hour) {

        if (hours > 12) {
            hours = hours - 12;
        }

        if (hours === 0) {
            hours = 12;
        }
    }


    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);


    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;


    if (is24Hour) {
        document.getElementById("ampm").style.display = "none";
    } else {
        document.getElementById("ampm").style.display = "inline";
        document.getElementById("ampm").innerText = ampm;
    }


    let dateOptions = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    let currentDate = currentTime.toLocaleDateString(
        "en-IN",
        dateOptions
    );

    document.getElementById("date").innerText = currentDate;
}


function addZero(number) {

    if (number < 10) {
        return "0" + number;
    }

    return number;
}


document.getElementById("formatBtn").addEventListener("click", function () {

    is24Hour = !is24Hour;

    if (is24Hour) {
        this.innerText = "Switch to 12 Hour";
    } else {
        this.innerText = "Switch to 24 Hour";
    }

    updateClock();
});


updateClock();

setInterval(updateClock, 1000);
