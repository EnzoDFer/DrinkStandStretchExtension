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
  public getAlarm() {
    let x;
    let o;
    x = chrome.alarms.get(this._alarmName);
    x.then((result)=>{
      console.log(result.scheduledTime);
      o = result;
    })
    return o;
  };

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

const drinkAlarm = new alarmClock('drink alarm');

const drinkButton:HTMLButtonElement|null = document.querySelector('#drinkReset');
if (drinkButton==undefined) {throw new Error('no button found')}

drinkButton.textContent += `${drinkAlarm.repeatDelayInMinutes}`;
drinkAlarm.repeatDelayInMinutes=40;
drinkButton.textContent += `${drinkAlarm.repeatDelayInMinutes}`
drinkButton.textContent += `${drinkAlarm.getAlarm()}`;
drinkButton.textContent += `///after`;

