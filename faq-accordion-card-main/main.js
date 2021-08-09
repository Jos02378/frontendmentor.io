const accordions = document.querySelectorAll('.container__box');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        if (accordion.classList.contains('active')) {
            accordion.classList.remove('active');
            let label = accordion.querySelector('.container__label');
            label.style.fontWeight = '400';
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
            let label = accordion.querySelector('.container__label');
            label.style.fontWeight = '700';
        }
    });
});
