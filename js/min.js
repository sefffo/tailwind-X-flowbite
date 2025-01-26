if (localStorage.getItem('theme-toggle') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
} else {
    document.documentElement.classList.remove('dark')
}


var themeToggleDarkIcon = document.getElementById('theme-toggle');
var themeToggleLightIcon = document.getElementById('theme-toggle');

// Change the icons inside the button based on previous settings
if (localStorage.getItem('theme-toggle') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    themeToggleLightIcon.classList.remove('hidden');
} else {
    themeToggleDarkIcon.classList.remove('hidden');
}

var themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', function() {

    // toggle icons inside button
    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    // if set via local storage previously
    if (localStorage.getItem('theme-toggle')) {
        if (localStorage.getItem('theme-toggle') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme-toggle', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme-toggle', 'light');
        }

    // if NOT set via local storage previously
    } else {
        if (document.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme-toggle', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme-toggle', 'dark');
        }
    }
    
});