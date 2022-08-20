function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}
function login(){
    const email= document.getElementById('form2Example1').value;
    const password= document.getElementById('form2Example2').value;
   
    if (email== "" || password==""){
        showAlertError();
        return;
        
    }else{
        window.location.href= "./stioDePortada.html"
    }
}
function cerrarAlert(){
    const botonAlert= document.getElementById('BotonAlert');
botonAlert= window.close ()}


//const form= document.getElementById('form');
//const boton= document.getElementById('regBtn');