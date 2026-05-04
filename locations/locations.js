
//ده خاص بعكس الالوان
function toggleTheme() {
    document.documentElement.classList.toggle('light-mode');

    const btn = document.querySelector('.theme-btn');
    if (document.documentElement.classList.contains('light-mode')) {
        btn.textContent = '🌙 Dark';
        localStorage.setItem('theme', 'light');
    } else {
        btn.textContent = '☀️ Light';
        localStorage.setItem('theme', 'dark');
    }
}

// حفظ اللون بتاع الموقع سواء دارك او لايت خلال التصفح
window.addEventListener('DOMContentLoaded', function () {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        document.documentElement.classList.add('light-mode');
        const btn = document.querySelector('.theme-btn');
        if (btn) btn.textContent = '🌙 Dark';
    }
});



const carousel = document.getElementById('carousel');
const leftBtn = document.getElementById('scrollLeftBtn');
const rightBtn = document.getElementById('scrollRightBtn');

const scrollAmount = 2200;
leftBtn.addEventListener('click', () => {
    carousel.scrollLeft -= scrollAmount;
});

rightBtn.addEventListener('click', () => {
    carousel.scrollLeft += scrollAmount;
});

const destinations = {
    pyramids:{
        title: "The Great Pyramids of Giza",
        description: "The Egyptian pyramids are monumental stone structures built as magnificent tombs for the pharaohs of ancient Egypt. Constructed primarily during the Old and Middle Kingdom periods, they showcase the civilization's advanced engineering skills. The most famous complex is located at Giza, situated on the Giza Plateau just outside of modern-day Cairo. The Great Pyramid of Giza, built for Pharaoh Khufu, remains the oldest of the Seven Wonders of the Ancient World. These iconic landmarks continue to stand as enduring symbols of the country's rich historical legacy and cultural heritage.",
        image:"locationsPhotos/subimgpyramids.jpg",
        video:"https://www.youtube-nocookie.com/embed/u1S9p3IfCV0"
    },
    sphinx:{
        title: "The Sphinx",
        description: "The Great Sphinx of Giza is a massive limestone statue featuring the body of a lion and the head of a human. It is widely believed to represent the face of the Pharaoh Khafre from the Old Kingdom era. Serving as a guardian of the Giza Plateau, it is one of the oldest and largest monolithic statues in the world. Despite centuries of weathering and damage, the monument retains its awe-inspiring presence. The Sphinx remains an iconic symbol of ancient Egyptian mythology and monumental sculpture.",
        image:"locationsPhotos/subimgsphinx.jpg",
        video:"https://www.youtube-nocookie.com/embed/ZsMGlfQzM2E",
    },
    redsea:{
        title: "The Red Sea",
        description: "Sharm Elsheikh is a vibrant resort city situated on the southern tip of the Sinai Peninsula along the Red Sea. It is internationally renowned for its crystal-clear waters and spectacular coral reefs, making it a premier destination for scuba diving and snorkeling. The city offers a luxurious mix of high-end resorts, bustling nightlife, and beautiful sandy beaches. Beyond the beaches, visitors can explore the nearby desert landscapes or embark on guided safaris. It stands as a modern hub for both relaxation and aquatic adventure in the heart of the Egyptian Riviera.",
        image:"locationsPhotos/subimgsharm.jpg",
        video:"https://www.youtube-nocookie.com/embed/inz3PoiQoYw"
    },
    luxortemples:{
        title: "The Luxor Temples",
        description: "The Karnak Temple Complex in Luxor is a vast open-air museum and one of the largest religious sites ever constructed. Built and expanded over 2,000 years by successive pharaohs, it features a stunning array of decayed temples, chapels, and pylons. Its most famous feature is the Great Hypostyle Hall, a massive forest of towering, intricately carved stone pillars. Dedicated primarily to the Theban triad with the god Amun at its head, it was the most important place of worship in ancient Egypt. Today, it offers a breathtaking glimpse into the architectural and spiritual devotion of the New Kingdom.",
        image:"locationsPhotos/subimgluxor.jpg",
        video:"https://www.youtube-nocookie.com/embed/kye1IrQcadk"
    },
    khanelkhalili:{
        title: "Khan El-Khalili",
        description: "Khan El Khalili is a historic and bustling souk located in the vibrant Islamic center of Cairo. Established in the 14th century as a prominent trading hub, it is a labyrinth of narrow alleys and colorful market stalls. The bazaar is famous for its wide array of goods, including traditional crafts, spices, jewelry, and authentic souvenirs. Visitors can also enjoy traditional Egyptian tea and shisha at iconic coffeehouses like Café Fishawy. It remains a lively cultural epicenter that captures the vibrant spirit and rich mercantile history of the city.",
        image:"locationsPhotos/subimgkhanelkhalili.jpg",
        video:"https://www.youtube-nocookie.com/embed/lAqBn_0lU_E"
    }
};
const detailImg = document.getElementById('detail-img');
const detailTitle = document.getElementById('detail-title');
const detailDesc = document.getElementById('detail-desc');
const detailVideo = document.getElementById('detail-video');
const detailsContainer = document.querySelector('.details-section');

function loadDestination(targetKey){
    const data = destinations[targetKey];

    if (data){
        detailsContainer.classList.add('fade-out');

        setTimeout(() =>{
        detailImg.src = data.image;
        detailTitle.innerHTML = data.title;
        detailDesc.innerHTML = data.description;
        detailVideo.src = data.video;
        detailsContainer.classList.remove('fade-out');
        },400);
    }
}

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('click',() => {
        const target = card.getAttribute('data-target');
        loadDestination(target);
    });
});
loadDestination('pyramids'); 

const tabs = document.querySelectorAll('.tab-content li');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.getAttribute('data-target');
        
        loadDestination(target);
        
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
    });
});