mostraLivro = function () {
  const params = new URLSearchParams(location.search)
  let id = params.get('id');
  dadosLivros = JSON.parse(localStorage.getItem('books'));
  let idxFilme = dadosLivros.items.findIndex((elem) => elem.id == id)
  const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api'
  if (idxFilme > -1) {
    let livro = dadosLivros.items[idxFilme];
    document.getElementById('detalheLivros').innerHTML = `
    <div class="row">
            <div class="col-md-4">
                <img src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Capa do livro" id="capaLivro" class="img-fluid rounded">
            </div>
            <div class="col-md-8">
                <h2 class="mb-3">${livro.volumeInfo.title}</h2>
                <ul class="list-unstyled">
                    <li class="mb-1"><strong>Autor:</strong> <span>${livro.volumeInfo.authors}</span></li>
                    <li class="mb-1"><strong>Data de publicação:</strong> <span>${livro.volumeInfo.publishedDate}</span></li>
                    <li class="mb-3"><strong>Lingua:</strong> <span>${livro.volumeInfo.language}</span></li>
                    <li class="mb-3"><strong>Total Paginas:</strong> <span>${livro.volumeInfo.pageCount}</span></li>
                    <li id="verifica" class="mb-3"><strong>Avaliação:</strong> <span>${livro.volumeInfo.averageRating}</span></li>
                    <li  class="mb-3"> <a onclick="adicionaLivroLido()" href="" class="btn btn-dark">+ Já lido</a></li>
                  
                    <li class="mb-3"> <a onclick="adicionaLivroFavorito()" href="" class="btn btn-dark">+ favorito</a></li>
                    
                </ul>
                <h3 class="mb-3">Descrição do livro:</h3>
                <p>${livro.volumeInfo.description}</p>
            </div>
        </div>
`
  }
  else {
    alert('Livro não encontrado')
  }
  "Codigo do Livro: " + params.get('id');
}



adicionaLivroLido = function () {
  const params = new URLSearchParams(location.search);
  let id = params.get("id");
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  let dadosLivros = JSON.parse(localStorage.getItem("books"));

  let livro = dadosLivros.items.find((livro) => livro.id === id);

  if (livro) {
    let livroLido = {
      id: livro.id,
      title: livro.volumeInfo.title,
      thumbnail: livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : ""
    };

    if (!usuario.livrosLidos) {
      usuario.livrosLidos = [];
    }

    if (usuario.livrosLidos.some((livroLido) => livroLido.id === livro.id)) {
      alert("Livro já adicionado aos livros lidos");
    } else {
      alert("Adicionado");
      usuario.livrosLidos.push(livroLido);
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
  } else {
    alert("Livro não encontrado");
  }
}


adicionaLivroFavorito = function () {
  const params = new URLSearchParams(location.search);
  let id = params.get("id");
  let usuario = JSON.parse(localStorage.getItem("usuario")); // Busca o objeto do usuário no localStorage
  let dadosLivros = JSON.parse(localStorage.getItem("books"));

  let livro = dadosLivros.items.find((livro) => livro.id === id);

  if (livro) {
    let livroFavorito = {
      id: livro.id,
      title: livro.volumeInfo.title,
      thumbnail: livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : ""
    };

    if (!usuario.livrosFavoritos) {
      usuario.livrosFavoritos = [];
    }

   if (usuario.livrosFavoritos.some((livroFav) => livroFav.id === livroFavorito.id)) {
      alert("Livro já adicionado aos favoritos");
    } else {
      alert("Adicionado");
      usuario.livrosFavoritos.push(livroFavorito);
      localStorage.setItem("usuario", JSON.stringify(usuario));
    }
  } else {
    alert("Livro não encontrado");
  }
}
