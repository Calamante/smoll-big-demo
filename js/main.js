const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".navigation");


// =========================================
// MENÚ MOBILE
// =========================================

menuButton.addEventListener("click", () => {

    const isOpen =
        navigation.classList.toggle("active");


    menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

});


// Cerrar menú al seleccionar una sección

const navigationLinks =
    document.querySelectorAll(".navigation a");


navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded", "false"
        );

    });

});


// =========================================
// FORMULARIO DEMO
// =========================================

// =========================================
// FORMULARIO DEMO
// =========================================

const form =
    document.querySelector(".contact-form");


form.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
        form.querySelector(
            '[name="nombre"]'
        ).value;


    alert(
        `Gracias ${nombre}. Esta es una demostración de la V1.1. ` +
        `En la versión final la consulta se enviará directamente al equipo comercial.`
    );

});

// =========================================
// MODAL DE PROYECTOS
// =========================================

const projectCards =
    document.querySelectorAll(".project-open");


const projectModal =
    document.querySelector("#projectModal");


const projectModalClose =
    document.querySelector("#projectModalClose");


const projectModalBackdrop =
    document.querySelector(".project-modal-backdrop");


const projectModalImage =
    document.querySelector("#projectModalImage");


const projectModalTitle =
    document.querySelector("#projectModalTitle");


const projectModalCategory =
    document.querySelector("#projectModalCategory");


const projectModalDescription =
    document.querySelector("#projectModalDescription");



projectCards.forEach((project) => {

    project.addEventListener("click", () => {

        const title =
            project.dataset.title;

        const category =
            project.dataset.category;

        const description =
            project.dataset.description;

        const image =
            project.dataset.image;


        projectModalTitle.textContent =
            title;

        projectModalCategory.textContent =
            category;

        projectModalDescription.textContent =
            description;

        projectModalImage.src =
            image;

        projectModalImage.alt =
            title;


        projectModal.classList.add("active");

        projectModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.style.overflow =
            "hidden";

    });

});



function closeProjectModal() {

    projectModal.classList.remove("active");

    projectModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}



projectModalClose.addEventListener(
    "click",
    closeProjectModal
);


projectModalBackdrop.addEventListener(
    "click",
    closeProjectModal
);



document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal.classList.contains("active")
        ) {

            closeProjectModal();

        }

                if (
            event.key === "Escape" &&
            serviceModal.classList.contains(
                "active"
            )
        ) {

            closeServiceModal();

        }

    }
);

// =========================================
// ANIMACIONES AL HACER SCROLL
// =========================================

const revealElements =
    document.querySelectorAll(
        ".section-heading, " +
        ".service-card, " +
        ".project, " +
        ".stat, " +
        ".contact-card, " +
        ".values-list > div"
    );


revealElements.forEach((element) => {

    element.classList.add("reveal");

});


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});

// =========================================
// MODAL DE SERVICIOS
// =========================================

const serviceCards =
    document.querySelectorAll(
        ".service-open"
    );


const serviceModal =
    document.querySelector(
        "#serviceModal"
    );


const serviceModalClose =
    document.querySelector(
        "#serviceModalClose"
    );


const serviceModalBackdrop =
    document.querySelector(
        ".service-modal-backdrop"
    );


const serviceModalNumber =
    document.querySelector(
        "#serviceModalNumber"
    );


const serviceModalTitle =
    document.querySelector(
        "#serviceModalTitle"
    );


const serviceModalDescription =
    document.querySelector(
        "#serviceModalDescription"
    );



serviceCards.forEach((service) => {

    service.addEventListener(
        "click",
        () => {

            const number =
                service.dataset.number;

            const title =
                service.dataset.title;

            const description =
                service.dataset.description;


            serviceModalNumber.textContent =
                number;


            serviceModalTitle.textContent =
                title;


            serviceModalDescription.textContent =
                description;


            serviceModal.classList.add(
                "active"
            );


            serviceModal.setAttribute(
                "aria-hidden",
                "false"
            );


            document.body.style.overflow =
                "hidden";

        }

    );

});



function closeServiceModal() {

    serviceModal.classList.remove(
        "active"
    );


    serviceModal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}



serviceModalClose.addEventListener(
    "click",
    closeServiceModal
);



serviceModalBackdrop.addEventListener(
    "click",
    closeServiceModal
);

// =========================================
// SERVICIO → CONTACTO
// =========================================

const serviceContactButton =
    document.querySelector(
        ".service-modal-contact"
    );


serviceContactButton.addEventListener(
    "click",
    () => {

        closeServiceModal();

    }
);