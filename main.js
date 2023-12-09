
const usuarios = [
    {
    login:'ana',
    pass: 'ana'
},
{
    login:'julio',
    pass: 'julio'
},
{
    login:'admin',
    pass: 'admin'
}
]

let botao = document.getElementById('botaoLogin');

botao.addEventListener('click',function logar() {
    
    let pegaUsuario = document.getElementById('usuario').value;
    let pegaSenha = document.getElementById('senha').value;
    let validaLogin = false;
    
    for(let i in usuarios){
        
        if(pegaUsuario == usuarios[i].login && pegaSenha == usuarios[i].pass) {
            validaLogin = true
            break;
        }else{
            validaLogin = false          
        }
    }

    if (validaLogin == true) {
        location.href = 'home.html'
    } else {
        alert('login ou senha incorreto');}
    
})

