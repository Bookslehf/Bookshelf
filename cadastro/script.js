cadastrar = function(){
    const usuario = document.getElementById("usuario").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuarioParam = {
        usuario: usuario,
        email: email,
        senha: senha
    }

    
    let token = valor_cookie("jwt");
    let xhr = new XMLHttpRequest();
    let url = "http://localhost:8080/api/usuarios/save";
    xhr.onload = sucesso();
    xhr.onerror=
    xhr.open('POST',url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    if(token != ""){
        xhr.setRequestHeader("Authorization", "Bearer "+ token);
    }
    xhr.send(JSON.stringify(usuarioParam));
}
sucesso = (data)=>{
  
   alert("Usuario cadastrado com sucesso");  
   window.location.href = "./login/login.html";  
 }

 valor_cookie = function(jwt) {
    var cname = ' ' + jwt + '=';
    
    var cookies = document.cookie;
    
    if (cookies.indexOf(cname) == -1) {
        return false;
    }
    
    
    cookies = cookies.substr(cookies.indexOf(cname), cookies.length);

   
    if (cookies.indexOf(';') != -1) {
        cookies = cookies.substr(0, cookies.indexOf(';'));
    }
    
    
    cookies = cookies.split('=')[1];
    

    return decodeURI(cookies);
}

window.onload = function() {
    var inputs = document.getElementsByClassName('input-form');
    for(let i=0; i<inputs.length; i++) {
        inputs[i].addEventListener('blur', function() {
            if(this.value.trim() !== "") {
                this.classList.add('has-val');
            } else {
                this.classList.remove('has-val');
            }
        })
    }
}