
logar = function () {
    let email = document.querySelector("#email").value;
    let senha = document.querySelector("#senha").value;
    let url = "http://localhost:8080/api/usuarios/login";
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let usuario = xhr.responseText;
            if (usuario == null || usuario == "") {
                alert("Usuario ou usenha incorretos");
            }
            else {
                localStorage.setItem('usuario', usuario);
                window.location.href = "../index2.html"
                console.log("Logado");
            }
        }


    }

    xhr.send("email=" + email + "&senha=" + senha);


}

function handleCredentialResponse(response) {
                               
    const data = jwt_decode(response.credential)
    console.log(data)

    let nome = data.name
    let email = data.email
    let id = data.sub
    let picture = data.picture

    loginGoogle(nome, email, id, picture);
   
}
window.onload = function () {
    google.accounts.id.initialize({
        client_id: "378780725926-vkac2vbpmksp3jgsneoojlvmkkaaec42.apps.googleusercontent.com",
        callback: handleCredentialResponse
     
    });
    google.accounts.id.renderButton(
        document.getElementById("buttonDiv"),
        {
            theme: "filled_black",
            size: "large",
            size: "medium"
        }  // customization attributes
    );
    google.accounts.id.prompt(); // also display the One Tap dialog
}

loginGoogle =(nome,email,id, picture) =>{
    const usuarioParam = {
        usuario: nome,
        email: email,
        id: id,
        picture: picture
    }
    const usuario = JSON.stringify(usuarioParam);
    localStorage.setItem('usuario', usuario);
    window.location.href = "../index2.html"
    alert("LOGADA")
}







//NEGOCIO DE LOADING
  //<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(100).css({ 'overflow': 'visible' });
      })
      //]]>




