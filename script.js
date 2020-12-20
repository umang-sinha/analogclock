function setDate() {
    
    const now = new Date();

    const secondsHand = document.querySelector(`.seconds-hand`);
    const minutesHand = document.querySelector(`.minutes-hand`);
    const hoursHand = document.querySelector(`.hours-hand`);

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds/60)*6) + 90;

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;

    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

    const clockSound = document.querySelector(`audio`);
    clockSound.play();
}

setInterval(setDate, 1000);
