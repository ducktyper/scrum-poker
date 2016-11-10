import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'standard',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Standard = require('./containers/StandardContainer').default
      const reducer = require('./modules/standard').default

      injectReducer(store, { key: 'standard', reducer })
      cb(null, Standard)
    }, 'standard')
  }
})
