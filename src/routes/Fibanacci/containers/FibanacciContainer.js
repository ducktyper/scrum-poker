import { connect } from 'react-redux'
import { select, reveal, clear } from '../modules/fibanacci'

import Fibanacci from '../components/Fibanacci'

const mapDispatchToProps = {
  select : (value) => select(value),
  reveal,
  clear
}

const mapStateToProps = (state) => {
  return {
    choice : state.fibanacci.choice,
    view   : state.fibanacci.view
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fibanacci)
