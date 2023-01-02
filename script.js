function monstrar() {
  const cep = document.getElementById("CEP").value;
  fetch("https://api.postmon.com.br/v1/cep/" + cep)
    .then((response) => response.json())
    .then((data) => {
      // Cidade
      document.getElementById("cidade").value = data.cidade;
      document.getElementById("cidade").setAttribute("disabled", "");
      //   Estado
      document.getElementById("estado").value = data.estado_info.nome;
      document.getElementById("estado").setAttribute("disabled", "");
      //   Bairro
      document.getElementById("bairro").value = data.bairro;
      document.getElementById("bairro").setAttribute("disabled", "");
      //   Logradouro
      document.getElementById("logradouro").value = data.logradouro;
      document.getElementById("logradouro").setAttribute("disabled", "");

      document.getElementById("cidade").value = data.cidade;
      document.getElementById("cidade").setAttribute("disabled", "");
    })
    .catch((error) => console.log(error));
}
