var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware


function local(localhost){
	return {
		target: localhost,
		changeOrigin: true,
		pathRewrite: {
			'^/*': '/*'
		}
	}
}

var proxyTable = {
  // detail
  '/api/items/': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/items/': '/api/items/'
    }
  },
  '/api/carts': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/carts': '/api/carts'
    }
  },
  // cart
  '/api/favorites': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/favorites': '/api/favorites'
    }
  },

  // register
  '/checkAvaiable': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/checkAvaiable': '/checkAvaiable'
    }
  },
  '/registCode': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/registCode': '/registCode'
    }
  },
  '/regist': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/regist': '/regist'
    }
  },
  // login
  '/login': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/login': '/login'
    }
  },
  // passwordReset
  '/checkExist': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/checkExist': '/checkExist'
    }
  },
  '/verifyCode': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/verifyCode': '/verifyCode'
    }
  },
  '/verifyPrincipal': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/verifyPrincipal': '/verifyPrincipal'
    }
  },
  '/modifyPassword': {
    target: 'http://localhost:8080',
    changeOrigin: true,
    pathRewrite: {
      '^/modifyPassword': '/modifyPassword'
    }
  },
  // addresses
  '/api/addresses': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/addresses': '/api/addresses'
    }
  },
  '/api/states': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/states': '/api/states'
    }
  },
  '/api/cities': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/cities': '/api/cities'
    }
  },
  '/api/regions': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/regions': '/api/regions'
    }
  },

  // bizhi
  '/cooka': {
		target: 'http://localhost',
		changeOrigin: true,
		pathRewrite: {
			'^/cooka': '/cooka'
		}
	},
	// Search
  '/item02': local('http://119.29.224.238:9200'),

  // BuyFootprint
  '/api/footprints': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/footprints': '/api/footprints'
    }
  },

	'/api/addresses':{
    target:'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/addresses':'/api/addresses'
    }
  },


  '/api/states':{
    target:'http://localhost:4000',
    changeOrigin: true,
    pathRewrite:{
      '^/api/states':'/api/states'
     }
    },
  '/api/cities': {
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '^/api/cities': '/api/cities'
      }
    },
  '/api/regions':{
    target:'http://localhost:4000',
    changeOrigin: true,
    pathRewrite:{
      '^/api/regions':'/api/regions'
      }
    }
}

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
