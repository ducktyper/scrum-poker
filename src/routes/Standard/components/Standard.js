import React from 'react'
import Shake from '../../../lib/shake'

export const Standard = (props) => {
  Shake.disable()

  let displayClass = (choice) => {
    if (choice === '☕') return 'size-emoji'
    return `size-${choice.length}`
  }

  if (props.view === 'select-box') {
    return (
      <div id='select-box'>
        <div className='choice' onClick={() => props.select('0')}><div>0</div></div>
        <div className='choice' onClick={() => props.select('1/2')}><div>1/2</div></div>
        <div className='choice' onClick={() => props.select('1')}><div>1</div></div>
        <div className='choice' onClick={() => props.select('2')}><div>2</div></div>
        <div className='choice' onClick={() => props.select('3')}><div>3</div></div>
        <div className='choice' onClick={() => props.select('5')}><div>5</div></div>
        <div className='choice' onClick={() => props.select('8')}><div>8</div></div>
        <div className='choice' onClick={() => props.select('13')}><div>13</div></div>
        <div className='choice' onClick={() => props.select('20')}><div>20</div></div>
        <div className='choice' onClick={() => props.select('40')}><div>40</div></div>
        <div className='choice' onClick={() => props.select('80')}><div>80</div></div>
        <div className='choice' onClick={() => props.select('100')}><div>100</div></div>
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

Standard.propTypes = {
  choice : React.PropTypes.string.isRequired,
  view   : React.PropTypes.string.isRequired,
  select : React.PropTypes.func.isRequired,
  reveal : React.PropTypes.func.isRequired,
  clear  : React.PropTypes.func.isRequired
}

export default Standard
