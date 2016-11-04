export const FIBANACCI_SELECT = 'FIBANACCI_SELECT'

export function select (choice) {
  return {
    type    : FIBANACCI_SELECT,
    payload : choice
  }
}

const ACTION_HANDLERS = {
  [FIBANACCI_SELECT] : (state, action) => action.payload
}

const initialState = ""
export default function counterReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
