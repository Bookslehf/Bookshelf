
const initLogin = function () {

    let usuarioString = localStorage.getItem('usuario');
    let imgUserElement = document.getElementById('imgUser');
    if (imgUserElement) {
      imgUserElement.src = usuario.picture;
    }
    if (usuarioString == undefined || usuarioString == 'undefined' || usuarioString == null) {
      
      // Mostra a navbar para quando o usuário não está logado
      document.getElementById('navbarLoggedOut').innerHTML = `
          <nav class="navbar navbar-expand-lg bg-body-tertiary" style=" height: 73px; background-color: #fff">
          <div class="container-fluid" style="padding-left: 160px; ">
            <a class="navbar-brand" href="#">Bookshelf</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link navbar-links " href="../index.html" style=" margin-right: 31px;">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../favoritos/index.html" style=" margin-right: 31px;">Favoritos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../lidos/lidos.html" style="">Lidos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../login/login.html" style=" margin-left: 456px; ">Entrar</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="../cadastro/cadastro.html" style="display: flex; justify-content: center; align-items: center; color: #fff; margin-left: 26px; background-color: #337ab7; width: 120px; height: 35px; border-radius: 8px; padding: 6px 12px; font-family: 'Nunito', sans-serif;">Cadastre-se</a>
              </li>
              </ul>
            </div>
          </div>
      </nav>`;
  
    } else {
  
      let usuario = JSON.parse(usuarioString);
      if (usuario != null && usuario != "") {
        // Mostra a navbar para quando o usuário está logado
  
        let dados =
          document.getElementById('navbarLoggedIn').innerHTML = ` 
              
              <nav class="navbar navbar-expand-lg bg-body-tertiary" style=" height: 73px; background-color: #fff">
              <div class="container-fluid" style="padding-left: 160px; ">
                <a class="navbar-brand" href="#">Bookshelf</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav" style="display: flex; align-items: center;">
                <li class="nav-item">
                  <a class="nav-link navbar-links" aria-current="page" href="../index.html" style=" margin-right: 31px;">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../favoritos/index.html" style=" margin-right: 31px;">Favoritos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../lidos/lidos.html" style="">Lidos</a>
                </li>
  
                <li class="nav-item" style="display: flex; align-items: center;">
                <a href="../perfil/PaginaPerfil.html" style="text-decoration: none"> <img src="${usuario.picture}" id="imgUser" style="border-radius: 30px;width:50px;margin-left: 450px; "></img></a>
                <span id="loginUser" style="margin-left: 10px;"> ${usuario.usuario}</span>
                </li>
              </ul>
                </div>
              </div>
            </nav>`;
  
      }
    }
  }
  

  
  
  /*pesquisar*/
  pesquisar = function () {
    const campoPesquisa = document.getElementById('campoBuscar').value;
    if (campoPesquisa !== '') {
      window.location = '../pesquisados/index.html?query=' + campoPesquisa
    }
    else {
      alert("Preencha o campo")
    }
  }
  
  
  
  //NEGOCIO DE LOADING
  //<![CDATA[
  $(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(500).fadeOut('slow');
    $('body').delay(100).css({ 'overflow': 'visible' });
  })
  //]]>
  
  //APERTAR ENTER
  document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
  
      var btn = document.querySelector("#btnPesquisa");
  
      btn.click();
  
    }
  });