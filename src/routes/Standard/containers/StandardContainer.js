import { connect } from 'react-redux'
import { select, reveal, clear } from '../modules/standard'

import Standard from '../components/Standard'

const mapDispatchToProps = {
  select : (value) => select(value),
  reveal,
  clear
}

const mapStateToProps = (state) => {
  return {
    choice : state.standard.choice,
    view   : state.standard.view
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Standard)
