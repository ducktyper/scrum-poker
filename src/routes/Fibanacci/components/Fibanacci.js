import React from 'react'
import Shake from '../../../lib/shake'

export const Fibanacci = (props) => {
  Shake.disable()

  let displayClass = (choice) => {
    if (choice === '☕') return 'size-emoji'
    return `size-${choice.length}`
  }

  if (props.view === 'select-box') {
    return (
      <div id='select-box'>
        <div className='choice' onClick={() => props.select('0')}><div>0</div></div>
        <div className='choice' onClick={() => props.select('1')}><div>1</div></div>
        <div className='choice' onClick={() => props.select('2')}><div>2</div></div>
        <div className='choice' onClick={() => props.select('3')}><div>3</div></div>
        <div className='choice' onClick={() => props.select('5')}><div>5</div></div>
        <div className='choice' onClick={() => props.select('8')}><div>8</div></div>
        <div className='choice' onClick={() => props.select('13')}><div>13</div></div>
        <div className='choice' onClick={() => props.select('21')}><div>21</div></div>
        <div className='choice' onClick={() => props.select('34')}><div>34</div></div>
        <div className='choice' onClick={() => props.select('55')}><div>55</div></div>
        <div className='choice' onClick={() => props.select('89')}><div>89</div></div>
        <div className='choice' onClick={() => props.select('144')}><div>144</div></div>
        <div className='choice' onClick={() => props.select('?')}><div>?</div></div>
        <div className='choice' onClick={() => props.select('∞')}><div>∞</div></div>
        <div className='choice' onClick={() => props.select('☕')}><div>☕</div></div>
      </div>
    )
  } else if (props.view === 'ready-to-reveal') {
    Shake.enable(props.reveal)
    return (
      <div id='ready-to-reveal' onClick={props.reveal}>
        Ready
      </div>
    )
  } else if (props.view === 'reveal-card') {
    return (
      <div id='reveal-card' onClick={props.clear} className={displayClass(props.choice)}>
        {props.choice}
      </div>
    )
  } else {
    return (
      <div>No view</div>
    )
  }
}

Fibanacci.propTypes = {
  choice : React.PropTypes.string.isRequired,
  view   : React.PropTypes.string.isRequired,
  select : React.PropTypes.func.isRequired,
  reveal : React.PropTypes.func.isRequired,
  clear  : React.PropTypes.func.isRequired
}

export default Fibanacci
