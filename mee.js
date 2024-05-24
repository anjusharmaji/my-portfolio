
        
        var links = document.querySelectorAll('.nav-links li a');
    
        
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                
                links.forEach(function(item) {
                    item.classList.remove('active');
                });
                
                link.classList.add('active');
            });
        });

        var navLinks = document.querySelectorAll('.nav-links a');

        navLinks.forEach(function(link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();
                var targetId = link.getAttribute('href');
                var targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
       

        