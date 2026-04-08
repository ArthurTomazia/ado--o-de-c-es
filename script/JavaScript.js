document.getElementById("formAdocao").addEventListener("submit", function (e) {
e.preventDefault();
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value; 
let moradia = document.getElementById("moradia").value;
let quintal = document.querySelector('input[name="quintal"]:checked');
let pet = document.querySelector('input[name="pet"]:checked');
let horas = document.getElementById("horas").value;
if(pet.value == "nao") return alert("Em caso de nunca ter tido um pet a ONG acompanhará o caso");
if(horas>9) return alert("O cachorro não pode ficar tanto tempo sozinho")
if(cpf.length == 0 ) return alert("Insira seu CPF");
if(nome.length < 3) return alert("Nome Inválido");
document.getElementById("resultado").innerHTML = "Cadastro realizado com sucesso!<br>" + "Nome: " +
nome;
});
