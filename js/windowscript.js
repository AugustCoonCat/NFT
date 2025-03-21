
    document.addEventListener('DOMContentLoaded', function() {
        const submitButton = document.querySelector('.history__window-buttonbuy');
        const historyWindow = document.querySelector('.history__window');
        const overlay = document.createElement('div');
    let isFixed = false;

    submitButton.addEventListener('click', function() {
        if (!isFixed) {
            document.body.classList.add('blur');
            historyWindow.classList.add('fixed');
        } else {
            historyWindow.classList.remove('fixed');
            document.body.classList.remove('blur');
        }
        isFixed = !isFixed; 
    });
});