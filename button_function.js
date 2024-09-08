function ratingButton(button){
    const row = button.closest('.button-row');
    const buttons = row.querySelectorAll('.rating-button');

    buttons.forEach(choice =>{
        if(choice===button){
            choice.classList.toggle('on');
            choice.classList.toggle('off');
            choice.textContent = choice.classList.contains('on') ? 'On' : 'Off';
        } else {
                choice.classList.remove('on');
                choice.classList.add('off');
                choice.textContent = choice.textContent.replace('On', 'Off');
            }
        
    });
};
