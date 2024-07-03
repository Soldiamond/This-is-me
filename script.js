function updateTimeAndDay() {
    const currentTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
    const currentDayElement = document.querySelector('[data-testid="currentDay"]');
    
    const now = new Date();
    const hours = now.getUTCHours().toString().padStart(2, '0');
    const minutes = now.getUTCMinutes().toString().padStart(2, '0');
    const seconds = now.getUTCSeconds().toString().padStart(2, '0');
    const currentTime = `Time: ${hours}:${minutes}:${seconds} UTC`;

    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = `Day: ${daysOfWeek[now.getUTCDay()]}`;

    currentTimeElement.textContent = currentTime;
    currentDayElement.textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
