angular.module('portfolioApp', [])
.controller('PortfolioController', function($scope, $timeout, $window) {
    var ctrl = this;

    ctrl.navItems = [
        { name: 'Home', link: 'home' },
        { name: 'About', link: 'about' },
        { name: 'Skills', link: 'skills' },
        { name: 'Projects', link: 'projects' },
        { name: 'Experience', link: 'experience' },
        { name: 'Certificates', link: 'certificates' },
        { name: 'Contact', link: 'contact' }
    ];

    ctrl.skills = [
        {
            category: 'Frontend',
            items: [
                {
                    name: 'HTML5',
                    logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
                    description: 'HTML5 is the latest version of Hypertext Markup Language, the code that describes web pages.',
                    purposes: [
                        'Structure content on the web',
                        'Support multimedia without plugins',
                        'Provide better semantics for document structure'
                    ]
                },
                {
                    name: 'CSS3',
                    logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
                    description: 'CSS3 is the latest evolution of the Cascading Style Sheets language.',
                    purposes: [
                        'Style and layout web pages',
                        'Create responsive designs',
                        'Implement animations and transitions'
                    ]
                },
                {
                    name: 'JavaScript',
                    logo: 'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg',
                    description: 'JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification.',
                    purposes: [
                        'Create interactive web pages',
                        'Develop server-side applications with Node.js',
                        'Build cross-platform mobile apps'
                    ]
                },
                {
                    name: 'Angular',
                    logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
                    description: 'Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google.',
                    purposes: [
                        'Develop single-page applications',
                        'Create reusable UI components',
                        'Implement complex business logic in web apps'
                    ]
                },
                {
                    name: 'React',
                    logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
                    description: 'React is a JavaScript library for building user interfaces, developed by Facebook.',
                    purposes: [
                        'Build interactive UIs',
                        'Develop single-page applications',
                        'Create reusable components'
                    ]
                }
            ]
        },
        {
            category: 'Backend',
            items: [
                {
                    name: 'Node.js',
                    logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
                    description: 'Node.js is an open-source, cross-platform JavaScript runtime environment.',
                    purposes: [
                        'Build scalable network applications',
                        'Create web servers and networking tools',
                        'Develop command line tools'
                    ]
                },
                {
                    name: 'Express.js',
                    logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg',
                    description: 'Express.js is a minimal and flexible Node.js web application framework.',
                    purposes: [
                        'Create robust APIs',
                        'Build web applications',
                        'Handle HTTP requests and responses'
                    ]
                },
                {
                    name: 'MongoDB',
                    logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
                    description: 'MongoDB is a cross-platform document-oriented database program.',
                    purposes: [
                        'Store and manage large volumes of data',
                        'Handle complex data structures',
                        'Provide high performance and scalability'
                    ]
                }
            ]
        },
        {
            category: 'Other',
            items: [
                {
                    name: 'Git',
                    logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
                    description: 'Git is a distributed version control system for tracking changes in source code during software development.',
                    purposes: [
                        'Manage and track code changes',
                        'Facilitate collaboration among developers',
                        'Maintain different versions of a project'
                    ]
                },
                {
                    name: 'Docker',
                    logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg',
                    description: 'Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.',
                    purposes: [
                        'Create consistent development environments',
                        'Simplify application deployment',
                        'Improve scalability and resource utilization'
                    ]
                },
                {
                    name: 'AWS',
                    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
                    description: 'Amazon Web Services (AWS) is a comprehensive, evolving cloud computing platform provided by Amazon.',
                    purposes: [
                        'Host and scale web applications',
                        'Store and process big data',
                        'Provide a wide range of cloud services'
                    ]
                }
            ]
        }
    ];

    ctrl.projects = [
        {
            name: 'Skylinemart-ecommerce',
            image: 'https://i.pinimg.com/736x/62/d4/79/62d47950534f8f40eee92dde6f3dfb95.jpg',
            shortDescription: 'This project is a feature-rich e-commerce platform designed to elevate convenience and accessibility. Combining the best of online shopping and booking systems, it serves as a one-stop solution for users seeking seamless experiences.',
            technologies: ['HTML5','CSS3','java script','Bootstrap','Tailwind','Angularjs'],
            liveDemo: 'https://dhanushkavin95.github.io/skylinemart/',
            github: 'https://github.com/dhanushkavin95/skylinemart'
        },
        {
            name: 'Financehub-financial calculators',
            image: 'https://i.pinimg.com/474x/3e/3a/ce/3e3ace0f977118cdaabb5733f0cda56f.jpg',
            shortDescription: 'Your one-stop destination for powerful financial tools! Explore a variety of calculators to manage loans, plan budgets, track savings, and make informed investment decisions. Simplify your finances with accurate, easy-to-use tools designed for everyday use',
            technologies: ['HTML5','CSS3','Java script','Bootstrap','Tailwind','Angular JS','google links'],
            liveDemo: 'https://dhanushkavin95.github.io/financehub/',
            github: 'https://github.com/dhanushkavin95/financehub'
        },
        {
            name: 'DK CalcX',
            image: 'https://i.pinimg.com/474x/84/42/14/84421486bcccc4a2098c7111d0b14184.jpg',
            shortDescription: 'A feature-rich, responsive calculator website designed by Dhanush Kavin, offering basic, scientific, financial, and conversion tools. Whether you re solving equations, managing finances, or converting units, DK CalcX provides a sleek, user-friendly interface to handle all your calculation needs effortlessly.',
            technologies: ['JavaScript', 'HTML5', 'CSS3', 'Bootstrap','Tailwind'],
            liveDemo: 'https://dhanushkavin95.github.io/DK-CalcX/',
            github: 'https://github.com/dhanushkavin95/DK-CalcX'
        },
        {
            name: 'NextGen Depot',
            image: 'https://i.pinimg.com/736x/b9/f6/54/b9f654329c2d53ee7e34dc55ab267ea3.jpg',
            shortDescription: 'The Digital Product Warehouse is an online platform for managing and distributing a wide variety of digital products. It offers seamless access, efficient organization, and secure delivery for both customers and administrators',
            technologies: ['HTML5', 'CSS3', 'JavaScript', 'Angular','Bootstrap','Tailwind'],
            liveDemo: 'https://dhanushkavin95.github.io/NextGenDepot/#',
            github: 'https://github.com/dhanushkavin95/NextGenDepot'
        }
    ];

    ctrl.selectedLanguage = null;
    ctrl.isLanguageDetailsVisible = false;

    ctrl.showLanguageDetails = function(language) {
        ctrl.selectedLanguage = language;
        ctrl.isLanguageDetailsVisible = true;
        $timeout(function() {
            document.getElementById('language-details').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    ctrl.hideLanguageDetails = function() {
        ctrl.isLanguageDetailsVisible = false;
        ctrl.selectedLanguage = null;
    };

    ctrl.isActive = function(viewLocation) {
        var active = (viewLocation === $location.path());
        return active;
    };

    ctrl.formData = {};

    ctrl.submitForm = function() {
        // Here you would typically send the form data to a server
        console.log('Form submitted:', ctrl.formData);
        // Reset form after submission
        ctrl.formData = {};
        $scope.contactForm.$setPristine();
        $scope.contactForm.$setUntouched();
        alert('Thank you for your message! I will get back to you soon.');
    };

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 200
    });

    // Initialize Swiper
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        }
    });

    // Navbar scroll effect
    angular.element($window).on('scroll', function() {
        var navbar = document.querySelector('.navbar');
        if ($window.pageYOffset > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Custom cursor
    var cursor = document.querySelector('.cursor');
    var cursorFollower = document.querySelector('.cursor-follower');

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    });

    // Parallax effect
    angular.element($window).on('scroll', function() {
        var scrolled = $window.pageYOffset;
        var parallaxImage = document.querySelector('.parallax-image');
        if (parallaxImage) {
            parallaxImage.style.transform = 'translateY(' + (scrolled * 0.3) + 'px)';
        }
    });

    // Typewriter effect
    function typeWriter(text, i, fnCallback) {
        if (i < text.length) {
            document.querySelector(".typewriter").innerHTML = text.substring(0, i+1) + '<span aria-hidden="true"></span>';
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        } else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 700);
        }
    }

    // Start the typewriter effect when the page loads
    $timeout(function() {
        typeWriter("I'm Dhanush Kavin, a Full Stack Web Developer passionate about creating amazing digital experiences.", 0);
    }, 1000);
});