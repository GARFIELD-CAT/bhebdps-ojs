class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(time, callback) {
    if (!time || !callback) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.find((alarm) => alarm.time === time)) {
      console.warn("Уже присутствует звонок на это же время");
    }

    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }

  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      (alarm) => alarm.time !== time
    );
  }

  getCurrentFormattedTime() {
    return new Date().toTimeString().slice(0, 5);
  }

  start() {
    if (this.intervalId) {
      return;
    }

    let checkAlarm = (alarm) => {
      let currentTime = this.getCurrentFormattedTime();
      if (alarm.time === currentTime && alarm.canCall) {
        alarm.canCall = false;
        return alarm.callback();
      }
    };

    this.intervalId = setInterval(
      () => this.alarmCollection.forEach((alarm) => checkAlarm(alarm)),
      1000
    );
  }

  stop() {
    if (this.intervalId !== null) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  resetAllCalls() {
    this.alarmCollection.forEach((alarm) => (alarm.canCall = true));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}
