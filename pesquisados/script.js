const mostraLivro = function(data){

    let dadosHTML ='';
    let dadosLivros = JSON.parse(data.target.response);
    localStorage.setItem('books', data.target.response)
    const imagemPadrao = 'http://books.google.com/books/content?id=-bF2CwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api';

    for(let i=0; i<dadosLivros.items.length ; i++){
        let livro = dadosLivros.items[i];
        dadosHTML+=`
        <div class="row" id="listaLivros" style="margin-top: 20px;" >
            <div id="books" class="col-4 "  >
                <a class="cardImg" href="/infoLivro/index.html?id=${livro.id}"> <img class="card-img-top" src="${livro.volumeInfo.imageLinks ? livro.volumeInfo.imageLinks.thumbnail : imagemPadrao}" alt="Card image cap"></a>
                <hr>
                <div class="card-body">
                        <h5 class="card-title">${livro.volumeInfo.title}</h5>
                </div>
            </div>
        </div>
        `;

    }
    document.getElementById('container').innerHTML = dadosHTML;
}
const mostraErro=(data) =>{
    alert('erro na aquisição');
}
function getParameter(theParameter) {
    var params = window.location.search.substr(1).split('&');

    for (var i = 0; i < params.length; i++) {
        var p = params[i].split('=');
        if (p[0] == theParameter) {
            return decodeURIComponent(p[1]);
        }
    }
    return false;
}

const init= function(){
    const param = getParameter('query');
    let xhr=new XMLHttpRequest();
    let url = "https://www.googleapis.com/books/v1/volumes?q=" + param;
    xhr.onload = mostraLivro; 
    xhr.oneerror=
    xhr.open('GET',url, true);
    xhr.send();
}






pesquisar=function(){
    const campoPesquisa = document.getElementById('campoBuscar').value;
    if(campoPesquisa !== ''){
        window.location='../pesquisados/index.html?query='+ campoPesquisa
    }
    else{
        alert("Preencha o campo")
    }  
} 
const initLogin = function(){
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined'){
        
        document.getElementById('alinhaLoginCadastro').innerHTML=`     
        <ul class="listaNav"> 
            <li class="nav-item" >
                <a href="/login/login.html"> <button class="btn btn-primary" id="btn">LOGIN</button></a>
            </li>
            <li class="nav-item" >
                <a href="/cadastro/cadastro.html"> <button class="btn btn-primary" id="btn">CADASTRO</button></a>
            </li>
            
        </ul>
        `;
    }else{
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuario != "" ){
            document.getElementById('alinhaLoginCadastro').innerHTML=`
            <ul class="listaNav">
                <li class="nav-item" >
                    <span id="loginUser"> ${usuario.usuario}</span>
                </li>
                <li class="nav-item" >
                    <a href="/perfil/PaginaPerfil.html"> <button class="btn btn-primary" id="btn">Perfil</button></a>
                </li>
                <li class="nav-item" >
                    <a href="" onclick="logout()"> <button class="btn btn-primary" id="btn">SAIR</button></a>
                </li>
            </ul>
            `;
        }      
    }
}
//NEGOCIO DE LOADING
//<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(500).fadeOut('slow'); 
        $('body').delay(100).css({'overflow': 'visible'});
      })

      

      document.addEventListener("keypress", function(e) {
        if(e.key === 'Enter') {
             
             var btn = document.querySelector("#btnPesquisa");
               
             btn.click();
             
         }
     });