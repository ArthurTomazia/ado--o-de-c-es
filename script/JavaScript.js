document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();
    let nome = document.getElementById("nome").value;
    let termos = document.querySelector('input[name="termos"]:checked');
    let cidade = document.getElementById("cidade").value;
    let email = document.getElementById("email").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let horas = document.getElementById("horas").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let motivo = document.getElementById("motivo").value;
    if (quintal.value == "nao") return alert("precisa ter quintal")
    if (telefone < 8) return alert ("Telefone inválido")
    if (idade < 18) return alert("Precisa ser maior de idade");
    if (motivo.length < 10) return alert("Motivo inválido");
    if (pet.value == "nao") return alert("Em caso de nunca ter tido um pet a ONG acompanhará o caso");
    if (horas > 9) return alert("O cachorro não pode ficar tanto tempo sozinho");
    if (termos.value == "nao") return alert("Aceite os temos");
    if (cidade.length < 1) return alert("Insira sua cidade");
    if (cpf.length == 0) return alert("Insira seu CPF");
    if (nome.length < 3) return alert("Nome Inválido");
    document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " +
        nome;
});
