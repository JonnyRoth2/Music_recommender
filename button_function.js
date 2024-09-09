function ratingButton(button) {
    const row = button.closest('.button-row');
    const buttons = Array.from(row.querySelectorAll('.rating-button'));
    const index = buttons.indexOf(button);
    
    buttons.forEach((choice, i) => {
        if (i <= index) {
            choice.classList.add('on');
            choice.classList.remove('off');
        } else {
            choice.classList.add('off');
            choice.classList.remove('on');
        }
    });
}
