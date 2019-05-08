const fs = require('fs')
const path = require('path')
const rollup = require('rollup')
const version = require('../package.json').version
const babel = require('rollup-plugin-babel')
const uglify = require('uglify-js')
const zlib = require('zlib')

if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist')
}

function resolve(p) {
  return path.resolve(__dirname, '../', p)
}
const banner =
  '/*!\n' +
  ' * chameleon-scroll v' + version + '\n' +
  ' */'
const builds = [{
  entry: resolve('index.js'),
  dest: resolve('dist/cscroll.js'),
  format: 'umd',
  moduleName: 'CScroll',
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  banner
}, {
  entry: resolve('index.js'),
  dest: resolve('dist/cscroll.esm.js'),
  format: 'es',
  moduleName: 'CScroll',
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  banner
}, {
  entry: resolve('index.js'),
  dest: resolve('dist/cscroll.min.js'),
  format: 'umd',
  moduleName: 'CScroll',
  plugins: [
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    })
  ],
  banner
}]

function build(builds) {
  let built = 0
  const total = builds.length
  const next = () => {
    buildEntry(builds[built]).then(() => {
      built++
      if (built < total) {
        next()
      }
    }).catch(logError)
  }

  next()
}

function buildEntry(config) {
  const isProd = /min\.js$/.test(config.dest)
  return rollup.rollup(config).then((bundle) => {
    const code = bundle.generate(config).code
    console.log(code)
    if (isProd) {
      var minified = (config.banner ? config.banner + '\n' : '') + uglify.minify(code, {
          output: {
            ascii_only: true
          },
          compress: {
            pure_funcs: ['makeMap']
          }
        }).code
      return write(config.dest, minified, true)
    } else {
      return write(config.dest, code)
    }
  }).catch(logError)
}

function write(dest, code, zip) {
  return new Promise((resolve, reject) => {
    function report(extra) {
      console.log(blue(path.relative(process.cwd(), dest)) + ' ' + getSize(code) + (extra || ''))
      resolve()
    }
    console.log(code)

    fs.writeFile(dest, code, (err) => {
      if (err) {
        return reject(err)
      }
      if (zip) {
        zlib.gzip(code, (err, zipped) => {
          if (err) return reject(err)
          report(' (gzipped: ' + getSize(zipped) + ')')
        })
      } else {
        report()
      }
    })
  })
}

function getSize(code) {
  return (code.length / 1024).toFixed(2) + 'kb'
}

function blue(str) {
  return '\x1b[1m\x1b[34m' + str + '\x1b[39m\x1b[22m'
}

function logError(e) {
  console.log(e)
}

build(builds)