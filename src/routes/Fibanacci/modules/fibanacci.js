export const FIBANACCI_SELECT = 'FIBANACCI_SELECT'
export const FIBANACCI_REVEAL = 'FIBANACCI_REVEAL'
export const FIBANACCI_CLEAR = 'FIBANACCI_CLEAR'

export function select (choice) {
  return {
    type    : FIBANACCI_SELECT,
    payload : { view: 'ready-to-reveal', choice: choice }
  }
}

export function reveal () {
  return {
    type    : FIBANACCI_REVEAL,
    payload : { view: 'reveal-card' }
  }
}

export function clear () {
  return {
    type    : FIBANACCI_CLEAR,
    payload : { view: 'select-box' }
  }
}

const ACTION_HANDLERS = {
  [FIBANACCI_SELECT] : (state, action) => Object.assign({}, state, action.payload),
  [FIBANACCI_REVEAL] : (state, action) => Object.assign({}, state, action.payload),
  [FIBANACCI_CLEAR]  : (state, action) => Object.assign({}, state, action.payload)
}

const initialState = { view: 'select-box', choice: '' }
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
