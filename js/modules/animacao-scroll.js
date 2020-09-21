export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll('[data-anime="scroll"]');
    console.log(sections);

if(sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade);
            if(isSectionVisible <0) {
                section.classList.add('ativo');
            } else {
                section.classList.remove('ativo');
            }
        });
    }

    animaScroll();

    window.addEventListener('scroll', animaScroll);
}	

}

initAnimacaoScroll();