const  mostraUsuario = function(){
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined'){
        
        document.getElementById('userName').innerHTML=` undefined
        `;
    }else{
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuario != "" ){
            document.getElementById('userName').innerHTML= `Usuario : ` + usuario.usuario;
            ;
        }      
    }
}

logout = function(){
    localStorage.removeItem('usuario');
    window.location.href= "./index2.html";
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
                  <a class="nav-link navbar-links " href="../index2.html" style=" margin-right: 31px;">Home</a>
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
                  <a class="nav-link navbar-links" aria-current="page" href="../index2.html" style=" margin-right: 31px;">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../favoritos/index.html" style=" margin-right: 31px;">Favoritos</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link navbar-links" href="../lidos/lidos.html" style="">Lidos</a>
                </li>
  
                <li class="nav-item" style="display: flex; align-items: center;">
                <a href="../perfil/PaginaPerfil.html" style="text-decoration: none"><i class="bi bi-person-circle"  style="font-size: 40px; margin-left: 456px;"></i></a>
                <span id="loginUser" style="margin-left: 10px;"> ${usuario.usuario}</span>
                </li>
              </ul>
                </div>
              </div>
            </nav>`;
  
      }
    }
  }
  
document.body.onload = initLogin;

/* ================JA LIDOS  =====================*/ 
livrosLidos = function(){
   
    const params = new URLSearchParams(location.search)
    let id = params.get('id');
    dadosLivros = JSON.parse (localStorage.getItem('books'));
    let idxFilme = dadosLivros.items.findIndex((elem) => elem.id == id)
    
    if(idxFilme>-1){
        let livro = dadosLivros.items[idxFilme];
        document.getElementById('container1').innerHTML = `
    
        <div class="col-3" id="listaLivros" >
            <div id="books" class="card col-sm-12 "  >
                <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}"> <img class="card-img-top" src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Card image cap"></a>
                <div class="card-body">
                    <h5 class="card-title">titulo</h5>            
                </div>      
            </div>  
        </div>
    `
    }
  
    
    "Codigo do Livro: " + params.get('id');
}


/* ================JA LIDOS  =====================*/ 

livrosFavoritos = function(){
    const params = new URLSearchParams(location.search)
    let id = params.get('id');
    dadosLivros = JSON.parse (localStorage.getItem('books'));
    let idxFilme = dadosLivros.items.findIndex((elem) => elem.id == id)
    
    if(idxFilme>-1){
        let livro = dadosLivros.items[idxFilme];
        document.getElementById('container2').innerHTML = `
    
        <div class="col-3" id="listaLivros" >
            <div id="books" class="card col-sm-12 "  >
                <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}"> <img class="card-img-top" src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Card image cap"></a>
                <div class="card-body">
                    <h5 class="card-title">titulo</h5>            
                </div>      
            </div>  
        </div>
    `
    }
   
    
    "Codigo do Livro: " + params.get('id');
}
