import "./css/style.css";

function initializeTime () {
    const time = new Date();
    const hour = -3600 * (time.getHours() % 12);
    const mins = -60 * time.getMinutes();
    const seconds = -time.getSeconds();

    document.querySelector("body").style.setProperty('--_dh', `${(hour + mins + seconds)}s`);
    document.querySelector("body").style.setProperty('--_dm', `${mins + seconds}s`);
    document.querySelector("body").style.setProperty('--_ds', `${(seconds)}s`);
}

initializeTime();
