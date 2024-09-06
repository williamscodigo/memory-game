//emojis
const moon = '🌒';
const sun = '🌕';

const lightMode = 'light';
const darkMode = 'dark';

//ui ref
const fb = $('#fb-mode');
const body = $('body');


//get mode from localStorage
let currentMode = localStorage.getItem('mode');

//set initial currentMode and emoji
currentMode = currentMode ? currentMode : lightMode;
fb.textContent = currentMode === lightMode ? sun : moon;
body.className = currentMode;


fb.addEventListener('click', function(e){
    e.stopPropagation();
    
    if(currentMode === lightMode){
        fb.textContent = moon;
        currentMode = darkMode;
        localStorage.setItem('mode', currentMode)
        body.className = darkMode;
    }else{
        fb.textContent = sun;
        currentMode = lightMode;
        localStorage.setItem('mode', currentMode);
        body.className = lightMode;
    }

})
