const btnInstall = document.getElementById("buttonInstall");

// Logic for installing the PWA
// DONE: Add an event handler to the `beforeinstallprompt` event
window.addEventListener("beforeinstallprompt", (event) => {
  window.deferredPrompt = event;
  btnInstall.classList.toggle("hidden", false);
});

// DONE: Implement a click event handler on the `butInstall` element
btnInstall.addEventListener("click", async () => {
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  window.deferredPrompt = null;
  btnInstall.classList.toggle("hidden", true);
});

// DONE: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
  window.deferredPrompt = null;
});
