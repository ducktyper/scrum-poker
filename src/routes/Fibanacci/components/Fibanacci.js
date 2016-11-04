import React from 'react'
import './fibanacci.scss'

export const Fibanacci = (props) => (
  <div id='select-box'>
    <p>{props.choice}</p>
    <div className='choice' onClick={() => props.select("0")}><div>0</div></div>
    <div className='choice' onClick={() => props.select("1")}><div>1</div></div>
    <div className='choice' onClick={() => props.select("2")}><div>2</div></div>
    <div className='choice' onClick={() => props.select("3")}><div>3</div></div>
    <div className='choice' onClick={() => props.select("5")}><div>5</div></div>
    <div className='choice' onClick={() => props.select("8")}><div>8</div></div>
    <div className='choice' onClick={() => props.select("13")}><div>13</div></div>
    <div className='choice' onClick={() => props.select("21")}><div>21</div></div>
    <div className='choice' onClick={() => props.select("34")}><div>34</div></div>
    <div className='choice' onClick={() => props.select("55")}><div>55</div></div>
    <div className='choice' onClick={() => props.select("89")}><div>89</div></div>
    <div className='choice' onClick={() => props.select("144")}><div>144</div></div>
    <div className='choice' onClick={() => props.select("?")}><div>?</div></div>
    <div className='choice' onClick={() => props.select("∞")}><div>∞</div></div>
    <div className='choice' onClick={() => props.select("☕")}><div>☕</div></div>
  </div>
)

Fibanacci.propTypes = {
  choice : React.PropTypes.string.isRequired,
  select : React.PropTypes.func.isRequired
}

export default Fibanacci
