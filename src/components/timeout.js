import { clearAuth } from '../actions/auth'

export default function Timeout (dispatch) {
  let time

  window.onmousemove = resetTimer()
  window.onmouseclick = resetTimer()
  window.onkeypress = resetTimer()

  function resetTimer () {
    clearTimeout(time)
    time = setInterval(myAlert, 5000)
    time = setInterval(logout, 10000)
  }

  function myAlert () {
    alert('Are you still there?')
  }

  function logout () {
    dispatch(clearAuth())
  }
}
