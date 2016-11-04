import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Fibanacci = require('./containers/FibanacciContainer').default
      const reducer = require('./modules/fibanacci').default

      injectReducer(store, { key: 'fibanacci', reducer })
      cb(null, Fibanacci)
    }, 'fibanacci')
  }
})
