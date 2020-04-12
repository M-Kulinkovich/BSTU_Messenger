import React,{Component} from 'react'
import './app-header.css'

export default class AppHeader extends Component {
    render(){
        return <div className='header'>
            <h1 className= 'logo'>Messenger</h1>
            <a className = 'btn btn-register' href="#">Sign in</a>
            <a className = 'btn btn-log' href="#">Log in</a>
        </div>
    }
}