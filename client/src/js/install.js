const butInstall = document.getElementById('buttonInstall');

let prompt;
// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    prompt = event;
    butInstall.style.visibility = 'visible';
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    if(!prompt)return;
     await prompt.prompt()


    butInstall.setAttribute('disabled', true);
    butInstall.textContent = 'Installed!'
})


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('app was succesfully installed', event)
    butInstall.style.visibility = 'hidden'
});
