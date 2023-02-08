const termsConfirm = () => {
    Swal.fire({
        position: 'bottom',
        icon: 'info',
        grow: 'row',
        html: `<p>Por favor acepte nuestros <a>terminos y condiciones</a>.</p>`,

        toast: true,
        confirmButtonText: 'acepto',
        allowEscapeKey: false,
        stopKeydownPropagation: false,

        showConfirmButton: true,

        customClass: {

        }
    })
}