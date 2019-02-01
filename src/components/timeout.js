import { clearAuth } from '../actions/auth'

export default function Timeout (dispatch) {
  let timer = 0

  window.onmousedown = () => resetTimer()
  window.onmousemove = () => resetTimer()
  window.onclick = () => resetTimer()
  window.onkeypress = () => resetTimer()

  function resetTimer () {
    timer = 0
  }

  let interval = setInterval(() => {
    console.log(timer)
    if (timer === 3) {
      console.log('alert')
    }
    if (timer === 5) {
      dispatch(clearAuth())
    }
    timer++
  }, 1000)

  return interval
}
