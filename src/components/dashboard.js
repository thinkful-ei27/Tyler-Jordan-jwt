import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import { fetchProtectedData } from '../actions/protected-data'
import Timeout from './timeout'
import { clearAuth } from '../actions/auth'

export class Dashboard extends React.Component {
    componentDidMount () {
    this.props.dispatch(fetchProtectedData())
    setInterval(()=> console.log('hi'), 3000)
    setInterval(() =>this.props.dispatch(clearAuth()), 20000)
  }

  componentWillUnmount(){
      clearInterval()
  }
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
