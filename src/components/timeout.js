import { clearAuth } from '../actions/auth'
import React from 'react'
import { flipState } from '../actions/dashboardAct';
export default function Timeout (dispatch) {
  let timer = 0

  window.onmousedown = () => resetTimer()
  window.onclick = () => resetTimer()
  window.onkeypress = () => resetTimer()

  function resetTimer () {
    timer = 0
  }

  let interval = setInterval(() => {
    console.log(timer)
    if (timer === 240) {
      dispatch(flipState())
     
    }
    if (timer === 300) {
      dispatch(flipState())
      dispatch(clearAuth())

    }
    timer++
  }, 1000)

  return interval
}
