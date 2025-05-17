document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Product data
    const products = [
        { name: 'Raw Honey', price: '¢50', img: 'honey1.jpeg' },
        { name: 'Beeswax Candles', price: '¢15', img: 'candle.jpeg' },
        { name: 'Propolis Tincture', price: '¢20', img: 'propolis.jpeg' },
        { name: 'Royal Jelly', price: '¢30', img: 'royal-jelly.jpeg' }
    ];

    // Generate product cards
    const productGrid = document.querySelector('.product-grid');
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.img}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            </div>
        `;
        productGrid.appendChild(card);
    });

    // Contact form submission
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will respond shortly.');
        this.reset();
    });
    
        
    // ********** NEW ABOUT PAGE FUNCTIONALITY **********
        
        // Animated timeline for our history
        const timelineItems = document.querySelectorAll('.timeline-item');
        
        function checkTimelineAnimation() {
            const triggerBottom = window.innerHeight / 5 * 4;
            
            timelineItems.forEach(item => {
                const itemTop = item.getBoundingClientRect().top;
                
                if(itemTop < triggerBottom) {
                    item.classList.add('show');
                }
            });
        }
    
        Window.addEventListener('scroll', checkTimelineAnimation);
        checkTimelineAnimation(); // Initial check
    
        // Team member hover effect
        const teamMembers = document.querySelectorAll('.team-member');
        
        teamMembers.forEach(member => {
            member.addEventListener('mouseenter', () => {
                member.querySelector('.member-info').style.opacity = '1';
            });
            
            Member.addEventListener('mouseleave', () => {
                Member.querySelector('.member-info').style.opacity = '0';
            });
        });
    
        // FAQ accordion
        const faqQuestions = document.querySelectorAll('.faq-question');
        
        faqQuestions.forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = answer.style.maxHeight;
                
                // Close all answers
                Document.querySelectorAll('.faq-answer').forEach(ans => {
                    Ans.style.maxHeight = null;
                    Ans.previousElementSibling.classList.remove('active');
                });
    
                // Open clicked answer if it was closed
                If(!isOpen); {
                    Answer.style.maxHeight = answer.scrollHeight + 'px';
                    Question.classList.add('active');
                }
            });
        });
    
    
});

