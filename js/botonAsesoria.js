// Crear el botón fijo en la esquina
const adviceButton = document.createElement('button');
adviceButton.innerHTML = `
  <img src="https://img.icons8.com/ios-filled/50/ffffff/chat--v1.png" alt="Chat Icon" style="width: 20px; height: 20px; vertical-align: middle; margin-right: 8px;">
  Text Us Now
`;
adviceButton.style.position = 'fixed';
adviceButton.style.bottom = '20px';
adviceButton.style.right = '20px';
adviceButton.style.padding = '10px 20px';
adviceButton.style.backgroundColor = '#007bff';
adviceButton.style.color = 'white';
adviceButton.style.border = 'none';
adviceButton.style.borderRadius = '10px 0 0 10px';
adviceButton.style.cursor = 'pointer';
adviceButton.style.transition = 'all 0.3s ease';
adviceButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
adviceButton.style.fontSize = '16px';
adviceButton.style.fontWeight = 'bold';
adviceButton.style.zIndex = '1000';

// Agregar el botón al documento
document.body.appendChild(adviceButton);

// Evento para abrir el formulario al hacer clic en el botón
adviceButton.addEventListener('click', () => {
    Swal.fire({
        customClass: {
            confirmButton: "btn btnSweetAlert",
            popup: 'custom-swal-popup',
            htmlContainer: 'custom-container',
            input: 'swal2-input',
            footer: 'custom-footer'
        },
        html: `
            <img class="img-fluid mt-2 mb-3" src="https://www.urbanmotors.com/carpics/tempupload/Button_Simple_6_269_638506765578542531.png" alt="bannersito">
            <form id="contactForm">
                <input type="text" id="nombre" class="swal2-input" placeholder="Nombre" required>
                <input type="text" id="apellido" class="swal2-input" placeholder="Apellido" required>
                <input type="email" id="correo" class="swal2-input" placeholder="Correo Electrónico" required>
            </form>
        `,
        confirmButtonText: 'Get Advice',
        preConfirm: () => {
            const nombre = document.getElementById('nombre').value;
            const apellido = document.getElementById('apellido').value;
            const correo = document.getElementById('correo').value;

            if (!nombre || !apellido || !correo) {
                Swal.showValidationMessage('Por favor, complete todos los campos');
                return;
            }

            // Crear el mensaje para WhatsApp
            const message = `Hola, mi nombre es ${nombre} ${apellido}. Mi correo electrónico es ${correo}. Me gustaría recibir asesoría.`;
            const whatsappUrl = `https://wa.me/584126581304?text=${encodeURIComponent(message)}`;

            // Redirigir a WhatsApp
            window.open(whatsappUrl, '_blank');
        }
    });
});
