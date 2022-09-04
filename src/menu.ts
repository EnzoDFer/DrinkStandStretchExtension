interface IAlarm{};

const alarmClocks: alarmClock[] = [];

class alarmClock {
  private _repeatDelayInMinutes: number;
  public set repeatDelayInMinutes(delay:number) {
    this._repeatDelayInMinutes = delay;
  }
  public get repeatDelayInMinutes() {
    return this._repeatDelayInMinutes;
  }

  private _alarmName:string;
  public get alarmName() {
    return this._alarmName;
  }

  constructor(alarmName:string) {
    this._repeatDelayInMinutes = 60;
    this._alarmName = alarmName;
    chrome.alarms.create(
      alarmName,
      {
      periodInMinutes: this._repeatDelayInMinutes,
    });
    alarmClocks.push(this);
  }
}

