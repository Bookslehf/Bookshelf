const mostraInfoUsuario = function () {
  let usuarioString = localStorage.getItem('usuario');
  if (usuarioString == undefined || usuarioString == 'undefined') {
    document.getElementById('imgUser').innerHTML = 'Foto';
    document.getElementById('nomeUser').innerHTML = 'undefined';
  } else {
    
    let usuario = JSON.parse(usuarioString);
    if (usuario != null && usuario != '') {
      document.getElementById('nomeUser').innerHTML = usuario.usuario;
    
      let imgUserElement = document.getElementById(usuario.picture ? 'imgUser' : 'userOff');
      if (imgUserElement) {
        imgUserElement.src = usuario.picture ? usuario.picture : '../assets/imgPerfil.png';
      }

      let totalLivrosLidos = usuario.livrosLidos ? usuario.livrosLidos.length : 0;
      document.getElementById('totalLivrosLidos').innerHTML = 'Total lidos: ' + totalLivrosLidos;

      let totalLivrosFavoritos = usuario.livrosFavoritos ? usuario.livrosFavoritos.length : 0;
      document.getElementById('totalLivrosFavoritos').innerHTML = 'Total favoritos: ' + totalLivrosFavoritos;
    }
  }
};

logout = function () {
  localStorage.setItem('usuario', undefined);
  window.location.href = "../index2.html";
}

/* ================MOSTRAR NAVBAR LOGADO OU NÃO  =====================*/
const initLogin = function () {

  let usuarioString = localStorage.getItem('usuario');
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

                </li>
              </ul>
                </div>
              </div>
            </nav>`;

    }
  }
}



/* ================JA LIDOS  =====================*/
mostraLivrosLidos = function () {
  let usuario = JSON.parse(localStorage.getItem('usuario'));

  const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

  if (usuario.livrosLidos) {
    usuario.livrosLidos.forEach((livro) => {
      document.getElementById('livrosLidos').innerHTML += `
    
            <div class="col-3" id="listaLivros">
              <div id="books" class="card col-sm-12">
                <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}">
                  <img class="card-img-top" src="${livro.thumbnail || imagemPadrao}" alt="Card image cap">
                </a>
                <div class="card-body">
                  <h5 class="card-title">${livro.title}</h5>
                </div>
              </div>
            </div>
      `;
    });
  }

  /* ================JA LIDOS  =====================*/

  mostraLivrosFavoritos = function () {
    let usuario = JSON.parse(localStorage.getItem('usuario'));

    const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

    if (usuario.livrosFavoritos) {
      usuario.livrosFavoritos.forEach((livro) => {
        document.getElementById('livrosFavoritos').innerHTML += `
    
            <div class="col-3" id="listaLivros">
              <div id="books" class="card col-sm-12">
                <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}">
                  <img class="card-img-top" src="${livro.thumbnail || imagemPadrao}" alt="Card image cap">
                </a>
                <div class="card-body">
                  <h5 class="card-title">${livro.title}</h5>
                </div>
              </div>
            </div>
      `;
      });
    }
  }
} 
