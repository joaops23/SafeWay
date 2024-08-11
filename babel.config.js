export default {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react'
  ],
  plugins: [
    ['module-resolver', {
      root: ['./functions'], // Define o diretório ./functions como o root
    }]
  ],
  parserOpts: { allowReturnOutsideFunction: true },
  ignore: [
    'node_modules/**', // Ignora todos os arquivos no diretório node_modules
    "functions/node_modules/**"
  ]
};