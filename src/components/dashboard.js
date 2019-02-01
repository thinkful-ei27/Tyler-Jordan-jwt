import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import { fetchProtectedData } from '../actions/protected-data'
import Timeout from './timeout'
import { clearAuth } from '../actions/auth'

export class Dashboard extends React.Component {
  componentDidMount () {
    this.props.dispatch(fetchProtectedData())
    Timeout(this.props.dispatch)
    //   clearInterval()
    //   this.startTimer(5000)
    //   window.onclick = () => this.startTimer(5000)
    //   window.onkeypress = () => this.startTimer(5000)
    // }
    // startTimer (timer) {
    //   clearInterval(timer)
    //   setInterval(() => console.log('hi'), timer)
  }

  componentWillUnmount () {}
  // this.props.dispatch(clearAuth())
  render () {
    return (
      <div className='dashboard'>
        <div className='dashboard-username'>
          Username: {this.props.username}
        </div>
        <div className='dashboard-name'>
          Name: {this.props.name}
        </div>
        <div className='dashboard-protected-data'>
          Protected data: {this.props.protectedData}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
