export const STANDARD_SELECT = 'STANDARD_SELECT'
export const STANDARD_REVEAL = 'STANDARD_REVEAL'
export const STANDARD_CLEAR  = 'STANDARD_CLEAR'

export function select (choice) {
  return {
    type    : STANDARD_SELECT,
    payload : {view: 'ready-to-reveal', choice: choice}
  }
}

export function reveal () {
  return {
    type    : STANDARD_REVEAL,
    payload : {view: 'reveal-card'}
  }
}

export function clear () {
  return {
    type    : STANDARD_CLEAR,
    payload : {view: 'select-box'}
  }
}

const ACTION_HANDLERS = {
  [STANDARD_SELECT] : (state, action) => Object.assign({}, state, action.payload),
  [STANDARD_REVEAL] : (state, action) => Object.assign({}, state, action.payload),
  [STANDARD_CLEAR]  : (state, action) => Object.assign({}, state, action.payload)
}

const initialState = {view: 'select-box', choice: ''}
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
