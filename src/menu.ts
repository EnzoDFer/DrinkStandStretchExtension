let button:HTMLButtonElement|null = document.querySelector("#colorChange");

if (button==null) throw new Error("No button found");

chrome.storage.sync.get("color", ({ color }) => {
  if (button) button.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
button.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (!tab.id) throw new Error("No tab found");

  chrome.scripting.executeScript({
    target: { 
      tabId: tab.id 
    },
    func: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor(): void {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}