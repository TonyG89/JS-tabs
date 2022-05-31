const tabs = document.querySelector('#tabs'),
    tabBtn = document.querySelectorAll('.tab-btn'),
    content = document.querySelectorAll('.content');

function pushBtn(activeBtn) {
    for (let i = 0; i < tabBtn.length; i++) {
        tabBtn[i].classList.remove('active');
        content[i].classList.remove('active');
    };

    tabBtn[activeBtn].classList.add('active');
    content[activeBtn].classList.add('active');
};

tabs.addEventListener('click', e => {
    const targetBtn = e.target.dataset.btn;
    pushBtn(targetBtn - 1);
});