//emojis
const moon = '🌒';
const sun = '🌕';

//light and dark mode const for class
const lightMode = 'light';
const darkMode = 'dark';

//ui ref
const fb = $('#fb-mode');
const body = $('body');


//get mode from localStorage
let currentMode = localStorage.getItem('mode');

//set initial currentMode and emoji
currentMode = currentMode ? currentMode : lightMode;
fb.textContent = currentMode === lightMode ? moon : sun;
body.className = currentMode;


fb.addEventListener('click', function(e){
    e.stopPropagation();
    
    if(currentMode === lightMode){
        fb.textContent = sun;
        currentMode = darkMode;
        localStorage.setItem('mode', currentMode)
        body.className = darkMode;
    }else{
        fb.textContent = moon;
        currentMode = lightMode;
        localStorage.setItem('mode', currentMode);
        body.className = lightMode;
    }

})
