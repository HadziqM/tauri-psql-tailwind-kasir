// const { invoke } = window.__TAURI__.tauri;

// let greetInputEl;
// let greetMsgEl;
// let button;

// window.addEventListener("DOMContentLoaded", () => {
//   button = document.querySelector("#test");
//   // greetInputEl = document.querySelector("#greet-input");
//   // greetMsgEl = document.querySelector("#greet-msg");
// });

let testing = document.getElementById("test");
testing.addEventListener("click", test);
function test() {
  testing.innerHTML = "clicked!";
}

// async function greet() {
//   // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
//   greetMsgEl.textContent = await invoke("greet", { name: greetInputEl.value });
// }

// window.greet = greet;
