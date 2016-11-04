import { connect } from 'react-redux'
import { select } from '../modules/fibanacci'

import Fibanacci from '../components/Fibanacci'

const mapDispatchToProps = {
  select : (value) => select(value)
}

const mapStateToProps = (state) => {
  return {
    choice : state.fibanacci
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Fibanacci)
