console.log('Main');
loadScript(['module1.js', 'module2.js'], () => {
    console.log('modules loaded');
});