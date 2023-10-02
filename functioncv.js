function myFunction() {
    document.getElementById("demo").innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt";
  }

  window.addEventListener('load',()=> {
    const form = document.querySelector('#formulario')
    const nombre = document.getElementById('nombre')
    const email = document.getElementById('email')
    const telefono = document.getElementById('telefono')
    
    form.addEventListener('submit',(e) =>{
        e.preventDefault()
        validaCampos()
    })
    const validaCampos = ()=> {
    const nombreValor = nombre.value
    const emailValor = email.value
    const telefonoValor = telefono.value

 if(!nombreValor){
    validaFalla(nombre, 'Campo vacio')
} else{
    validaOk(nombre) 
}

if(!emailValor){
    validaFalla(email, 'Campo vacio')
}else if(!validaEmail(emailvalor)) {
    validaFalla(email, 'El mail no es valido')
}else{
    validaOk(email)
}
if(!telefonoValor){
    validaFalla(telefono, 'Campo vacio')
}else if (telefonoValor.length <10) 
validaFalla(telefono, 'Debe tener minimo 10 caracteres')
}

const validaFalla = (input, msje) => {
    const formControl = input.parentElement
    const aviso = formControl.querySelector('p')
    aviso.innerText = msje
    formControl.className = 'form-control falla'
    }
    const validaOk = (input, msje) => {
        const formControl = input.parentElement
        formControl.className = 'form-control ok'
    }

    const validaEmail = (email) => {
        return  /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email); 
    }  
}) 