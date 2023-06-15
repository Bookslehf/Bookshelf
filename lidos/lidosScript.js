mostraLivro = function () {

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
}
verificaLogin = function () {
    let usuario = (localStorage.getItem('usuario'));
    if (usuario == undefined || usuario == 'undefined') {
        document.getElementById('mostraMsg').innerHTML = `
        <div class="card" style="width: 24rem;">
        <div class="card-body">
            <h5 class="card-title">Faça Login para continuar</h5>
            <p class="card-text">Você precisa estar logado para acessar seus livros favoritos.</p>
            <div class="centered-button" style="display: flex; justify-content: center; align-items: center;">
                <a href="../login/login.html" class="btn btn-primary">Login</a>
            </div>
        </div>
    </div>`
    }
}