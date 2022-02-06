"use strict";

// VARIABLES GLOBALES
const btnLike = document.getElementById("like");
const comment = document.getElementById("comment");
const share = document.getElementById("share");
const textArea = document.getElementById("textarea");
const btnComment = document.getElementById("btncomment");
const publicaciones = document.querySelector(".publicaciones");
const publicacion = document.querySelector(".publicacion");
const svg = document.querySelector(".svg");

const cambiarComportamientoBotones = () => {
    // CAMBIAR COLOR DE BTN LIKE
    btnLike.addEventListener("click", () => {
        svg.classList.toggle("act");
    })

}

const cambiarComportamientoComment = () => {
    comment.addEventListener("click", () => {
        const textArea = document.getElementById("textarea");
        textArea.value = "";
        const btnComment = document.getElementById("btncomment");
        // HACER QUE SALGA EL ELEMENTO DE COMENTARIOS
        if (!textArea.classList.contains("act")) {
            textArea.classList.add("act");
            btnComment.classList.add("actBtnComment");
        } else {
            textArea.classList.remove("act");
            btnComment.classList.remove("actBtnComment");
        }
    })
}

const lanzarNotificacion = () => {
    Notification.requestPermission(() => {
        // CONFIRMAR SI LAS NOTIFICACIONES ESTÁN ACTIVADAS
        if (Notification.permission == "granted") {
            console.log("Las notificaciones están activadas");
        } else {
            console.log("Las notificaciones están desactivadas");
        }
        // COMPARTIR LA PUBLICACIÓN 
        share.addEventListener("click", () => {
            new Notification("La publicación se ha compartido");
        })
    })
}

const crearElementos = () => {

    btnComment.addEventListener("click", () => {
        if (textArea.classList.contains("act") && btnComment.classList.contains("actBtnComment") && textArea.value.length > 3) {
            // CREAR ELEMENTO DE COMENTARIOS
            const fragment = document.createDocumentFragment();
            const containerComment = document.createElement("DIV");
            const p = document.createElement("P");

            // AGREAGR INPUT.VALUE A ELEMENTO P
            p.textContent = textArea.value;
            p.style.fontSize = "12px";

            containerComment.classList.add("containerComment");

            containerComment.appendChild(p);
            fragment.appendChild(containerComment);
            publicacion.appendChild(fragment);

            // QUITAR TEXTAREA
            textArea.classList.remove("act");
            btnComment.classList.remove("actBtnComment");
        } else alert("Tu comentario tiene que tener al menos un carácter");
    })
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            if (textArea.classList.contains("act") && btnComment.classList.contains("actBtnComment") && textArea.value.length > 3) {
                // CREAR ELEMENTO DE COMENTARIOS
                const fragment = document.createDocumentFragment();
                const containerComment = document.createElement("DIV");
                const p = document.createElement("P");

                // AGREAGR INPUT.VALUE A ELEMENTO P
                p.textContent = textArea.value;
                p.style.fontSize = "12px";

                containerComment.classList.add("containerComment");

                containerComment.appendChild(p);
                fragment.appendChild(containerComment);
                publicacion.appendChild(fragment);

                // QUITAR TEXTAREA
                textArea.classList.remove("act");
                btnComment.classList.remove("actBtnComment");
            }
            else alert("Tu comentario tiene que tener al menos un carácter");
        }
    })
}

const init = () => {
    cambiarComportamientoBotones();
    cambiarComportamientoComment();
    lanzarNotificacion();
    crearElementos();
}
init()