var totalJogadores = [];

function adicionarJogador() {
  var elementoAdicionar = document.getElementById("adicionar");
  var jogador = elementoAdicionar.value;
  var jogadores = {
    nome: "" + jogador + "",
    eliminações: 0,
    morte: 0,
    assistência: 0,
    mvp: 0
  };
  totalJogadores.push(jogadores);
  exibirJogadores(totalJogadores);
}

function exibirJogadores(totalJogadores) {
  var elemento = "";
  for (var i = 0; i < totalJogadores.length; i++) {
    elemento += "<tr><td>" + totalJogadores[i].nome + "</td>";
    elemento += "<td>" + totalJogadores[i].eliminações + "</td>";
    elemento += "<td>" + totalJogadores[i].morte + "</td>";
    elemento += "<td>" + totalJogadores[i].assistência + "</td>";
    elemento += "<td>" + totalJogadores[i].mvp + "</td>";
    elemento +=
      "<td><button onClick='adicionarEliminacao(" +
      i +
      ")'>Eliminação</button></td>";
    elemento +=
      "<td><button onClick='adicionarMorte(" + i + ")'>Morte</button></td>";
    elemento +=
      "<td><button onClick='adicionarAssistencia(" +
      i +
      ")'>Assistência</button></td>";
    elemento +=
      "<td><button onClick='adicionarMvp(" + i + ")'>MVP</button></td>";
    elemento += "</tr>";
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores");
  tabelaJogadores.innerHTML = elemento;
}

function adicionarEliminacao(i) {
  var jogador = totalJogadores[i];
  jogador.eliminações++;
  exibirJogadores(totalJogadores);
}

function adicionarAssistencia(i) {
  var jogador = totalJogadores[i];
  jogador.assistência++;
  exibirJogadores(totalJogadores);
}

function adicionarMorte(i, totalmente) {
  var jogador = totalJogadores[i];
  jogador.morte++;
  exibirJogadores(totalJogadores);
}

function adicionarMvp(i) {
  var jogador = totalJogadores[i];
  jogador.mvp++;
  exibirJogadores(totalJogadores);
}