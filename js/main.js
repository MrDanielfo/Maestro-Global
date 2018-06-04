
    (function () {
        'use strict';
        window.addEventListener('load', function () {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                }, false);
            });
        }, false);
    })();

/* suavizar el scroll */

document.querySelectorAll('.navbar .nav-link').forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(enlace.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        })
    })
})

    
/* cambiar el color de la barra de navegacion */ 

window.onscroll = (e) => {
    const scroll = window.scrollY;
    const header = document.querySelector('#principal');

    if ( scroll > 300 ) {
        header.classList.add('bg-primary');
    } else {
        header.classList.remove('bg-primary');
    }
}

