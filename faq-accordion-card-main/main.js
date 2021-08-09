const accordions = document.querySelectorAll('.container__box');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        if (accordion.classList.contains('active')) {
            accordion.classList.remove('active');
        } else {
            let currentAccordion = document.querySelector(
                '.container__box.active'
            );

            if (currentAccordion) {
                currentAccordion.classList.remove('active');
                let currentLabel =
                    currentAccordion.querySelector('.container__label');
                currentLabel.style.fontWeight = '400';
            }

            accordion.classList.add('active');
        }
    });
});
