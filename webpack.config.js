module.exports = {
    mode: 'development', // Definindo o modo de desenvolvimento
    entry: '../views/telashtml/artista.html', // Arquivo de entrada
    output: {
      filename: 'bundle.js', // Nome do arquivo de saída
      path: __dirname + '/dist', // Diretório de saída
    },
    devServer: {
      static: {
        directory: './dist', // Onde os arquivos estáticos estão
      },
      port: 3000, // Porta onde o servidor vai rodar
      open: true, // Abrir o navegador automaticamente
      hot: true, // Habilita o Hot Module Replacement (HMR)
    },
  };
  