// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {  //vai validar as info do usuario
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();

  $(document).ready(function(){  //vai colocar o campo com id telefone neste formato(99-9999999)
    $("#telefone").inputmask("(99)-99999-9999");
  });