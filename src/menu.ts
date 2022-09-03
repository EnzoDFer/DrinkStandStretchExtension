let button:HTMLButtonElement|null = document.querySelector("#colorChange");

chrome.storage.sync.get("color", ({ color }) => {
  if (button==null) throw new Error("No button found");
  button.style.backgroundColor = color;
});