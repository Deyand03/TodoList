const $ = (selector) => {
    return document.querySelector(selector);
};

const countList = $('#count-list');
const countSticky = $('#count-sticky');
const dashboard = $('#dashboard');
const btnMenu = $('#btn-dashboard');
const menu = $('#menu');
const light = $('#light-button');
const dark = $('#dark-button')
const choiceMode = $('.pilihan-mode');
let isButtonDisable = false;
const stickyColors = {
    pink: function(color){
        return color.style.backgroundColor = "#FFA29B"
    }
}

const iconList = {
    life: function(icon){
        return icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/></svg>`
    },
    work: function(icon){
        return icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pc-display" viewBox="0 0 16 16"><path d="M8 1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1zm1 13.5a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0m2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0M9.5 1a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM9 3.5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0-.5.5M1.5 2A1.5 1.5 0 0 0 0 3.5v7A1.5 1.5 0 0 0 1.5 12H6v2h-.5a.5.5 0 0 0 0 1H7v-4H1.5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5H7V2z"/></svg>`
    },
    project: function(icon){
        return icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journals" viewBox="0 0 16 16"><path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/><path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/></svg>`
    }
}
document.querySelectorAll('.btn-drop').forEach(button => {
    let count = 0;
    button.addEventListener('click', () => {
        const iconDrop = button.querySelector('.icon-drop');
        if (count == 0) {
            iconDrop.style.transform = "rotate(-90deg)";
            count++;
        } else {
            iconDrop.style.transform = "rotate(0deg)";
            count--;
        }
        iconDrop.style.transition = "all 0.3s ease-in-out"
    });
});

light.addEventListener('click', () => {
    choiceMode.style.transform = "translateX(10%) translateY(20%)"
})
dark.addEventListener('click', () => {
    choiceMode.style.transform = "translateX(110%) translateY(20%)"
})