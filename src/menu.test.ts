
describe('alarmClock Base Functionality', () => {
  test('Test Getters/Setters',()=>{
    const drinkAlarm = new alarmClock('drink alarm');
    expect(drinkAlarm.repeatDelayInMinutes).toBe(60);
    drinkAlarm.repeatDelayInMinutes = 40;
    expect(drinkAlarm.repeatDelayInMinutes).toBe(40);
  })
});