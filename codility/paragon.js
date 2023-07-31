// Solution sent in time ://GH Brazil

// TODO: reduce values in one run of arr.reduce

//Você deve alterar o conteudo desta funcao para processar as entradas de acordo.
function processarLinha(linha) {
  return linha;
}

function main(entradas) {
  const linhas = entradas.trim().split("\n"); //separa as entradas por linha e converte em um ARRAY de STRINGS.
  const obj = {
    clientes: 0,
    numeroDeItens: 0,
    items: [],
    excluir: "",
  };
  for (let i = 0; i < linhas.length; i++) {
    let linha_entrada;
    try {
      linha_entrada = eval(linhas[i]); //tenta converter a string pra inteiro ou array se falhar, cai no catch.
    } catch {
      linha_entrada = linhas[i]; //mantem como string porque o eval falhou em converter pra inteiro ou array.
    }
    if (!linha_entrada || linha_entrada !== "") {
      const resultado_processado = processarLinha(linha_entrada);
      if (resultado_processado) {
        if (i === 0) {
          obj.clientes = resultado_processado;
          continue;
        }
        if (i === 1) {
          obj.numeroDeItens = resultado_processado;
          continue;
        }
        if (i === linhas.length - 1) {
          obj.excluir = resultado_processado;
        } else {
          const item = resultado_processado.split(" ");
          const itemObj = { name: item[0], price: Number(item[1]) };
          obj.items.push(itemObj);
        }
      }
    }
  }

  const valorTotal = obj.items.reduce((prev, curr) => {
    return prev + curr.price;
  }, 0);

  const valorComum = obj.items.reduce((prev, curr) => {
    if (!obj.excluir.includes(curr.name)) {
      return prev + curr.price;
    }
    return prev;
  }, 0);

  const result = [
    valorTotal,
    valorComum / Number(obj.clientes),
    valorTotal - valorComum,
  ];

  for (let i = 0; i < 3; i++) {
    console.log(result[i]);
  }
}
