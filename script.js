let tab = function () {
    let accordionItem = document.querySelectorAll('.accordion-item'),
        answer = document.querySelectorAll('.answer'),
        accordionName;

    accordionItem.forEach(item => {
        item.addEventListener('click', selectAccordionItem)
    });

    function selectAccordionItem() {
        accordionItem.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        accordionName = this.getAttribute('data-accordion-name');
        selectAnswer(accordionName);
    }

    function selectAnswer(accordionName) {
        answer.forEach(item => {
            item.classList.contains(accordionName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }

};


tab();