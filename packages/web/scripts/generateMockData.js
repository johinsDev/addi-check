const jsf = require('json-schema-faker')
const requireAll = require('require-all')
const fs = require('fs')
const faker = require('faker')

jsf.extend('faker', () => faker)

const requires = requireAll({
  dirname: __dirname + '/__mocks__',
  filter: /(.+mock)\.ts$/,
  recursive: true,
})

if (!fs.existsSync(__dirname + '/../public/api')) {
  fs.mkdirSync(__dirname + '/../public/api')
}

function camelCaseToDash(myStr) {
  return myStr.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

function getMocks(files) {
  Object.keys(files).map(fileName => {
    const [mock, ext] = fileName.split('.')

    if (ext === 'mock') {
      const currentData = jsf.generate(files[fileName])

      const json = JSON.stringify(currentData)

      // *********** ESCOGE AL AZAR USUARIOS Y LOS PONE EN EL MOCK DE ANTECEDENTES JUDICIALES *************//

      const randomUsers = Array.from(
        { length: 8 },
        () => currentData[Math.floor(Math.random() * currentData.length)]
      )

      fs.writeFile(
        __dirname + '/../public/api/' + 'judicial' + '.json',
        JSON.stringify(randomUsers),
        function(err) {
          if (err) {
            return console.log(err)
          } else {
            console.log('Mock data generated.')
          }
        }
      )

      fs.writeFile(
        __dirname + '/../public/api/' + camelCaseToDash(mock) + '.json',
        json,
        function(err) {
          if (err) {
            return console.log(err)
          } else {
            console.log('Mock data generated.')
          }
        }
      )
    } else {
      getMocks(files[fileName])
    }
  })
}

getMocks(requires)
