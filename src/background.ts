let color:string = '#87CEEB';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %c a color', `color: ${color}`);
});