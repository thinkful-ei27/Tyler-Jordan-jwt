import React from 'react'
import { connect } from 'react-redux'
import requiresLogin from './requires-login'
import { fetchProtectedData } from '../actions/protected-data'
import Timeout from './timeout'
import { clearAuth } from '../actions/auth'
import {flipState} from '../actions/dashboardAct'

export class Dashboard extends React.Component {

    componentDidMount () {
    this.props.dispatch(fetchProtectedData())
    this.interval = Timeout(this.props.dispatch, this.state)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  render () {
    if(this.props.showing === false){
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
  }else if (this.props.showing === true) {
    return (
        <div>
        <h1>Still There?</h1>
        <button 
        onClick = {e => this.props.dispatch(flipState(e))}
        >Yes</button>
        </div>
    )
}
} 
}

const mapStateToProps = state => {
  const { currentUser } = state.auth
  return {
    username: state.auth.currentUser.username,
    name: `${currentUser.firstName} ${currentUser.lastName}`,
    protectedData: state.protectedData.data,
    showing: state.dasboard.showing
  }
}

export default requiresLogin()(connect(mapStateToProps)(Dashboard))
