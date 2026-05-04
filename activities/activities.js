// جزء خالد التحكم باللون
function toggleTheme() {
    document.documentElement.classList.toggle('light-mode');

    const btn = document.querySelector('.theme-btn');
    if (document.documentElement.classList.contains('light-mode')) {
        btn.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    }

//after you change themes we just have to now sync the layouts
    syncThemeLayout();
}
// Location maps
// dark card data-location, when we like click on the cards in the dark mode basically this is for them
const cardToDarkStage = {
    'giza':   'sphinx-stage',
    'sharm':  'sharm-stage',
    'luxor':  'luxor-stage',
    'almoez': 'khan-stage',
};

// same data-location but for the light mode links (the cards and the wide middle card yk)
const linkToLightStage = {
    'giza-light':    'giza-light',
    'sharm-light':   'sharm-light',
    'luxor-light':   'luxor-light',
    'almoez-light':  'khan-light',
};

// for each dark stage id, there's something on the opposite side for the light stage
const darkToLight = {
    'main-stage':    'main-stage-light',
    'sphinx-stage':  'giza-light',
    'sharm-stage':   'sharm-light',
    'luxor-stage':   'luxor-light',
    'khan-stage':    'khan-light',
};

// you know same stuff different direction
const lightToDark = {
    'main-stage-light': 'main-stage',
    'giza-light':       'sphinx-stage',
    'sharm-light':      'sharm-stage',
    'luxor-light':      'luxor-stage',
    'khan-light':       'khan-stage',
};

const allDarkStages  = ['main-stage', 'sphinx-stage', 'sharm-stage', 'luxor-stage', 'khan-stage'];
const allLightStages = ['main-stage-light', 'giza-light', 'sharm-light', 'luxor-light', 'khan-light']; //just to instantly call them without having to type the whole thing

// just the values of the current locations, in this case we start on the main stage for the two themse
let currentDarkStage  = 'main-stage';
let currentLightStage = 'main-stage-light';

function showDarkStage(id) { //basically goes"turn stuff off, we turn it back on ONLY when its what i clicked on by gettin its id because down there we have the data-target attribute which is basically saying "hey this is the id of the stage you should show when i click on this""
    allDarkStages.forEach(sid => {
        const el = document.getElementById(sid);
        if (!el) return;
        el.classList.remove('active');
        el.classList.add('not-active');
    });

    const target = document.getElementById(id);
    if (target) {
        target.classList.remove('not-active');
        target.classList.add('active');
    }

    currentDarkStage  = id;
    currentLightStage = darkToLight[id] || 'main-stage-light';   // keep mirror in sync

    localStorage.setItem('currentDarkStage',  currentDarkStage);
    localStorage.setItem('currentLightStage', currentLightStage);

    highlightDarkTab(id);
}

function showLightStage(id) {
    allLightStages.forEach(sid => {
        const el = document.getElementById(sid);//just basically says "okay lets turn EVERYTHING off first"
        if (!el) return; 
        el.classList.remove('active');
        el.classList.add('not-active');
    });

    const target = document.getElementById(id); //Hey fetch me the id i asked for rq?
    if (target) { //and lets turn on SPECIFICALLY what i asked for
        target.classList.remove('not-active');
        target.classList.add('active');
    }

    currentLightStage = id;
    currentDarkStage  = lightToDark[id] || 'main-stage'; //dont forget to make the equivalent locations, i didint.

    localStorage.setItem('currentLightStage', currentLightStage);
    localStorage.setItem('currentDarkStage',  currentDarkStage);

    highlightLightTab(id);
}
// Tab highlight helpers
function highlightDarkTab(activeStageId) {
    document.querySelectorAll('.tab-content li[data-target]').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-target') === activeStageId);
    });
}
function highlightLightTab(activeLightId) {
    document.querySelectorAll('.tab-light-content li[data-target]').forEach(li => {
        li.classList.toggle('active', li.getAttribute('data-target') === activeLightId);
    });
}
//basically when the themes change we ask "hey, does anything have the class of light mode?" if it does then we hide the dark layout and show the light layout
//now i have no clue if this IS the correct way to actually do these sorta things
//but it works and it isnt breaking, so if its not broken dont fix it ykwim
function syncThemeLayout() {
    const darkLayout  = document.getElementById('dark-mode-layout');
    const lightLayout = document.querySelector('.light-mode-layout');
    const lightTabBar = document.querySelector('.tab-bar-light');
    const isLight     = document.documentElement.classList.contains('light-mode');

    if (isLight) {
        if (darkLayout)  darkLayout.style.display  = 'none';
        if (lightTabBar) lightTabBar.style.display  = 'flex';
        if (lightLayout) lightLayout.style.display  = 'block';

//now this one's lovely we basically make an eqivalent location and we call it by having it equal to the object we made previously 
        const equivalentLight = darkToLight[currentDarkStage] || 'main-stage-light';
        showLightStage(equivalentLight);
    } else {
        if (darkLayout)  darkLayout.style.display  = 'block';
        if (lightTabBar) lightTabBar.style.display  = 'none';
        if (lightLayout) lightLayout.style.display  = 'none';

        //after we get the location we now just make its equivalent in the dark layout
        const equivalentDark = lightToDark[currentLightStage] || 'main-stage';
        showDarkStage(equivalentDark);
    }
}
//just runs this WHEN the HTML loads so that the code doesnt break ykwim
window.addEventListener('DOMContentLoaded', function () {

    //basically this is to check if the user changed anything previously
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.documentElement.classList.add('light-mode');
        const btn = document.querySelector('.theme-btn');
        if (btn) btn.textContent = '🌙 Dark';
    }
    //stores the current stage in the local storage, thats it there's nothing to that
    currentDarkStage  = localStorage.getItem('currentDarkStage')  || 'main-stage';
    currentLightStage = localStorage.getItem('currentLightStage') || 'main-stage-light';
    //this is just to you know, make sure the theme is in sync with the other theme, like if i am in sphinx-dark i should have my equivelant location be in sphinx-light and so on
    syncThemeLayout();

    //blah blah event listenr you click it gets the data location, it makes the current stage id be which card you clicked on and then runs the showDarkStage function (my pride and joy)
    document.querySelectorAll('.yasso-card[data-location]').forEach(card => {
        card.addEventListener('click', function () {
            const loc     = this.getAttribute('data-location');
            const stageId = cardToDarkStage[loc];
            if (stageId) showDarkStage(stageId);
        });
    });
    //literally just an event listener for the tab bar thingies in dark mode since they all have data-target, i love data target attribute this is useful as hell
    document.querySelectorAll('.tab-content li[data-target]').forEach(li => {
        li.addEventListener('click', function () {
            showDarkStage(this.getAttribute('data-target'));
        });
    });
    // kinda stupid way to approach the light mode links but oh well whatever works
    //covers both the regular cards and the wide middle card cus ts has a LINK with data location
    document.querySelectorAll('[data-location]').forEach(link => {
        const loc = link.getAttribute('data-location');
        if (!linkToLightStage[loc]) return;   //basically the way i treated this is just selecting all the links and if the link doesnt have a data-location then it no no you dont get an event listener, but if you DO have a data-location, then you're invited
        link.addEventListener('click', function (e) {
            e.preventDefault();
            showLightStage(linkToLightStage[loc]);
        });
    });
    //just event listeners for the tab bar light thingie 
document.querySelectorAll('.tab-light-content li[data-target]').forEach(li => {
    li.addEventListener('click', function () {
        showLightStage(this.getAttribute('data-target'));
    });
});
});