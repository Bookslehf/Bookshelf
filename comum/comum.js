logout = function(){
    localStorage.setItem ('usuario', undefined);
    window.location.href= "/index.html";

}
const initLogin = function(){
    let usuarioString = localStorage.getItem('usuario'); 
    if(usuarioString == undefined || usuarioString == 'undefined'){
        // Mostra a navbar para quando o usuário não está logado
        document.getElementById('navbarLoggedOut').style.display = "block";
        
    }else{
        let usuario = JSON.parse(usuarioString);
        if(usuario != null && usuario != "" ){
           
            // Mostra a navbar para quando o usuário está logado
            document.getElementById('navbarLoggedIn').style.display = "block";

        }      
    }
}

document.body.onload= initLogin;


/*pesquisar*/ 
pesquisar=function(){
    const campoPesquisa = document.getElementById('campoBuscar').value;
    if(campoPesquisa !== ''){
        window.location='../pesquisados/index.html?query='+ campoPesquisa
    }
    else{
        alert("Preencha o campo")
    }  
} 


  
//NEGOCIO DE LOADING
//<![CDATA[
    $(window).on('load', function () {
        $('#preloader .inner').fadeOut();
        $('#preloader').delay(500).fadeOut('slow'); 
        $('body').delay(100).css({'overflow': 'visible'});
      })
      //]]>
      
//APERTAR ENTER
 document.addEventListener("keypress", function(e) {
   if(e.key === 'Enter') {
        
        var btn = document.querySelector("#btnPesquisa");
          
        btn.click();
        
    }
});