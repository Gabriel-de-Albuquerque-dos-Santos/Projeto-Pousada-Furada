test("o arquivo de estilos globais deve ser importável", () => {
  // Tenta carregar o arquivo CSS para garantir que o caminho está correto
  const css = require("../styles/globals.css");
  
  // Verifica se o objeto importado foi definido (não é nulo ou vazio)
  expect(css).toBeDefined();
});