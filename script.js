class DigitalClock {
  constructor(element) {
    this.element = element;
  }

  start() {
    this.update();
    setInterval(() => {
      this.update();
    }, 500);
  }

  update() {
    const parts = this.getTimeParts();
    const minuteFormatted = parts.minute.toString().padStart(2, '0');
    const timeFormatted = `${parts.hour}:${minuteFormatted}`;
    const amPm = parts.isAM ? "AM" : "PM"
    const clockSeconds = parts.second

    this.element.querySelector('.clock-time').textContent = timeFormatted
    this.element.querySelector('.clock-amPm').textContent = amPm;
    this.element.querySelector('.clock-seconds').textContent = clockSeconds;

  }

  getTimeParts() {
    const now = new Date();

    return {
      hour: now.getHours() % 12 || 12,
      minute: now.getMinutes(),
      isAM: now.getHours() < 12,
      second: now.getSeconds()
    };
  }
  }

const clockElement = document.querySelector('.clock');
const clockObject = new DigitalClock(clockElement);

clockObject.start();
