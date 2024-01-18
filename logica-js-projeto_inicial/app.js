alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
let chute;
let tentativas = 1;


//enquanto chute n'ao for igual a n.s.
while (chute != numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 100');
    //se chute for igual ao número secreto
    if (chute == numeroSecreto){
        alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
    } else {
        if(chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else{
            alert(`O número secreto é maior que o ${chute}`);
        }
        tentativas++;
    
    }
}
