let continuar = true;
let tituloLivro = "";
let disponivel = true;

while (continuar) {
    // Solicita ao usuário uma opção
    let opcao = parseInt(prompt("Digite 1 para registrar um livro, 2 para emprestar o livro, 3 para devolver o livro, ou -1 para sair: "));

    // Estrutura condicional: switch
    switch (opcao) {
        case -1:
            // Caso o usuário digite -1, o loop é encerrado
            continuar = false;
            break;
        case 1:
            // Solicita o título do livro que o usuário deseja registrar
            tituloLivro = prompt("Digite o título do livro que deseja registrar: ");
            alert(`Livro registrado: ${tituloLivro}`);
            break;
        case 2:
            // Verifica se há um livro registrado
            if (tituloLivro === "") {
                alert("Nenhum livro registrado.");
            } else if (disponivel) {
                // Empresta o livro se estiver disponível
                disponivel = false;
                alert(`Você emprestou o livro: ${tituloLivro}`);
            } else {
                // Informa que o livro não está disponível
                alert(`O livro ${tituloLivro} não está disponível.`);
            }
            break;
        case 3:
            // Verifica se há um livro registrado
            if (tituloLivro === "") {
                alert("Nenhum livro registrado.");
            } else if (!disponivel) {
                // Devolve o livro se estiver emprestado
                disponivel = true;
                alert(`Você devolveu o livro: ${tituloLivro}`);
            } else {
                // Informa que o livro já está disponível
                alert(`O livro ${tituloLivro} já está disponível.`);
            }
            break;
        default:
            // Caso o usuário digite uma opção inválida
            alert("Opção inválida.");
    }
}

// Estrutura de repetição: do while
let i = 0;
do {
    // Exibe a lista de livros e sua disponibilidade
    if (tituloLivro !== "") {
        alert(`Livro: ${tituloLivro}, Disponível: ${disponivel}`);
    } else {
        alert("Nenhum livro registrado.");
    }
    i++;
} while (i < 1);

// Estrutura de repetição: for
for (let j = 0; j < 1; j++) {
    // Exibe a lista de livros e sua disponibilidade novamente
    if (tituloLivro !== "") {
        alert(`Livro: ${tituloLivro}, Disponível: ${disponivel}`);
    } else {
        alert("Nenhum livro registrado.");
    }
}

//Declaração de Variáveis:
//continuar: Controla o loop principal. Inicialmente, é true para que o loop while comece.
//tituloLivro: Armazena o título do livro registrado.
//disponivel: Indica se o livro está disponível para empréstimo. Inicialmente, é true.
//Estrutura de Repetição (while):
//O loop while continua executando enquanto continuar for true.
//Dentro do loop, o usuário é solicitado a escolher uma opção: /registrar um livro, emprestar um livro, devolver um livro ou sair.
//Estrutura Condicional (switch/):
//O switch avalia a opção escolhida pelo usuário.
//Caso -1: Define continuar como false para encerrar o loop.
//Caso 1: Solicita o título do livro e o registra, marcando-o como disponível.
//Caso 2: Verifica se há um livro registrado e se está disponível. Se estiver, marca-o como emprestado.
//Caso 3: Verifica se há um livro registrado e se está emprestado. Se estiver, marca-o como disponível.
//Default: Informa que a opção é inválida.
//Estrutura de Repetição (do while):
//Exibe a lista de livros e sua disponibilidade pelo menos uma vez.
//O loop do while garante que o bloco de código seja executado pelo menos uma vez, independentemente da condição.
//Estrutura de Repetição (for):
//Exibe a lista de livros e sua disponibilidade novamente.
//O loop for é usado aqui para demonstrar a estrutura, embora não seja necessário para a lógica do programa.
//Estrutura Condicional (if, else if, else):
//Verifica se há um livro registrado e se está disponível ou emprestado, fornecendo feedback apropriado ao usuário.
