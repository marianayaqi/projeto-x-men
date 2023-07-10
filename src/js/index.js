/* 

O que precisamos fazer ?

OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem, devemos selecioná-lo

OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descrição do personagem grande
*/

const peersonagens = document.querySelectorAll('.personagem');

peersonagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter' , () => {

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute ('data-name');
        
        
    })
})