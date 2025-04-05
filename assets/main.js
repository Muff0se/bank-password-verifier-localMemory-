const senha = [2,6,6,5,4,3];
let userSenha = [];

const loadingDialog = document.getElementById('loadingDialog');
const errorDialog = document.getElementById('errorDialog');

function delCaracter() {
    userSenha.pop();
    console.log(`senha atual: ${userSenha}`)
}

function insereSenha(carac) {
    const pos1 = carac[0];
    const pos2 = carac[1];
    if (userSenha.length === senha.length) {
        console.log('impossível inserir mais caracteres!')
    } else {
        if (userSenha.length === senha.length) {
            console.log('impossível inserir mais caracteres!');
        } else {
            const posAtual = senha[userSenha.length]; // valor esperado na posição atual
    
            if (pos1 === posAtual) {
                userSenha.push(pos1); // pos1 é o certo
            } else if (pos2 === posAtual) {
                userSenha.push(pos2); // pos2 é o certo
            } else {
                userSenha.push(pos1); // nenhum dos dois é o certo, insere qualquer um
            }

        console.log(`caracter inserido: ${carac}`);
        console.log(`senha atual: ${userSenha}`);
        }
    }
}

function comparaSenha() {
    if (senha.length !== userSenha.length) {
        console.log(false)
        return false;
    } else {
        for (let i = 0; i <= senha.length; i++) {
            if (senha[i] !== userSenha[i]) {
                console.log(false)
                return false;
            }
        }
        console.log(true)
        return true;
    }
}

async function acesso() {
    if (comparaSenha()) {
        abrirDialog(loadingDialog);
        await esperar(2000);
        window.location.href = './acesso/acesso.html'
    } else {
        abrirDialog(errorDialog);
        await esperar(5000);
        fecharDialog(errorDialog);
        userSenha = [];
        atualizaDots();
    }
}

function atualizaDots() {
    for (let i = 1; i <= 6; i++) {
        let dot = document.getElementById(`dot${i}`);
        
        if (i <= userSenha.length) {
            dot.classList.add('dot-active');
        } else {
            dot.classList.remove('dot-active');
        }
    }
}

function abrirDialog(dialog) {
    dialog.showModal();
}

function fecharDialog(dialog) {
    dialog.close();
}

function animaDialog(dialog, anim) {
    dialog.style.animation = `${anim}`;
}

function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

console.log(`Senha constante: ${senha}`);
console.log(`Senha inserida: ${userSenha}`);
console.log(`A senha é igual? ${comparaSenha()}`);
