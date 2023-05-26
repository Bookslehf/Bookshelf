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
    window.location.href= "/login/login.html";
}

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
document.body.onload = livrosLidos();

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
document.body.onload = livrosFavoritos()