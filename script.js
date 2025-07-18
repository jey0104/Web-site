// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.navigation a');

    function highlightNavigation() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // YouTube play button functionality
    const playButton = document.querySelector('.play-button');
    if (playButton) {
        playButton.addEventListener('click', function() {
            alert('Redirecting to Kun Agüero\'s YouTube Channel!');
            // In a real implementation, this would open the YouTube channel
            // window.open('https://youtube.com/channel/YOUR_CHANNEL_ID', '_blank');
        });
    }

    // Customize button functionality
    const customizeButtons = document.querySelectorAll('.customize-btn');
    customizeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productType = this.parentElement.querySelector('.product-image i').className;
            let productName = 'Product';
            
            if (productType.includes('tshirt')) {
                productName = 'Jersey';
            } else if (productType.includes('hat')) {
                productName = 'Cap';
            } else if (productType.includes('running')) {
                productName = 'Sports Pants';
            }
            
            alert(`Customize your ${productName}! \nFeatures coming soon:\n• Choose colors\n• Add custom text\n• Select size\n• Preview design`);
        });
    });

    // Social media icons functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className;
            let platformName = 'Social Media';
            
            if (platform.includes('facebook')) {
                platformName = 'Facebook';
            } else if (platform.includes('twitter')) {
                platformName = 'Twitter';
            } else if (platform.includes('instagram')) {
                platformName = 'Instagram';
            }
            
            alert(`Follow Kun Agüero on ${platformName}!`);
            // In a real implementation, these would link to actual social media pages
        });
    });

    // Add loading animation for hero image
    const heroImage = document.querySelector('.hero-image img');
    if (heroImage) {
        heroImage.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    }

    // Add parallax effect to hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        
        if (hero && heroContent) {
            const rate = scrolled * -0.5;
            heroContent.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add counter animation for King's League section
    function animateCounter() {
        const leagueSection = document.querySelector('.kings-league');
        const rect = leagueSection.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Add some dynamic content or animation here
            leagueSection.classList.add('animated');
        }
    }

    window.addEventListener('scroll', animateCounter);

    // Mobile menu toggle (for responsive design)
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        lastScrollY = window.scrollY;
    });
}); 