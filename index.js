const viewport = document.getElementById('viewport');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
const dotsContainer = document.getElementById('dotsContainer');

const TOTAL_CARDS = 12;
const DESIRED_DOTS = 8; 


function getCardStep() {/*بجيب عرض الكارت واضيف عليه ال جاب عشان لما اتحرك يحرك كارت كامل مش نص كارت */
    const card = document.querySelector('.artifact-card');
    const gap = 25; 
    return card.offsetWidth + gap;
}


function createFixedDots() {
    dotsContainer.innerHTML = ''; 
    for (let i = 0; i < DESIRED_DOTS; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
            
        dot.addEventListener('click', () => {
            const targetScroll = i * (getCardStep() * (TOTAL_CARDS / DESIRED_DOTS));
            viewport.scrollTo({ left: targetScroll, behavior: 'smooth' });
        });
        dotsContainer.appendChild(dot);
    }
}


nextBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: getCardStep(), behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    viewport.scrollBy({ left: -getCardStep(), behavior: 'smooth' });
});


viewport.addEventListener('scroll', () => {
    const maxScroll = viewport.scrollWidth - viewport.clientWidth;
    const scrollPercentage = viewport.scrollLeft / maxScroll;
    const activeIndex = Math.round(scrollPercentage * (DESIRED_DOTS - 1));
        
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === activeIndex);
    });
});

createFixedDots();
window.addEventListener('resize', createFixedDots);
