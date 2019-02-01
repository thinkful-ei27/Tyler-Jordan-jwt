import { clearAuth } from '../actions/auth'

export default function Timeout (dispatch) {
  let time
  
  window.onmousedown = resetTimer()
  window.onmousemove = resetTimer()
  window.onclick = console.log('fires')
  window.onkeypress = resetTimer()

  function resetTimer () {
    clearTimeout(time)
  }

  
  
  function myAlert () {
    // time = setTimeout(console.log('fired'), 5000)
    time = setTimeout(() => alert('Are you still there?') , 5000)
  }

  function logout () {
    dispatch(clearAuth())
  }

  
}
