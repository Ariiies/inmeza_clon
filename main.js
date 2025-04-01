// tomar el boton
const btn = document.getElementById('main_btn');
// agregar un evento al boton
btn.addEventListener('click', function() {
        // mensaje tras el boton
    alert('¡Hola! gracias por clickar el boton;)');
    console.log('click click click');
    // redireccionar a otra pagina tras 500ms
    setTimeout(function() {
        window.location.href = 'https://github.com/Ariiies'; 
    }, 500);
    });
// modal
const modalHTML = `
            <div id="modal">
                <div class="modal_background"></div>
                <div class="modal_content">
                    <img src="assets/figma2.png" alt="Promoción">
                    <button id="btn_close_modal">Cerrar</button>
                </div>
            </div>
        `;
        // insertar el modal en el body
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        // mostrar el modal tars 30s
        setTimeout(function() {
            document.getElementById('modal').style.display = 'block';
            document.getElementById('modal').addEventListener('click', closeModal);
            document.querySelector('.modal_background').addEventListener('click', closeModal);
        }, 30000);
        // funcion para cerrar el modal
        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }
 