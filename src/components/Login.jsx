import React from 'react'
import '../styles/login.css'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className='login' >
      <div className="loginBox">
        <Link to='/' className='xMark'><i class="fa-solid fa-xmark"></i></Link>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <h2>Login into your OLX account</h2>
        <Link to={{
          pathname: '/login-info',
          search: '?method=login'
        }} className='btn'>
          <button><i class="fa-regular fa-envelope"></i>Log In with Email</button></Link>
        <Link to={{
          pathname: '/login-info',
          search: '?method=login'
        }} className='btn'>
          <button><i class="fa-regular fa-envelope"></i>Log In with number</button></Link>
        <p>OR</p>
        <Link to={{
          pathname: '/login-info',
          search: '?method=login'
        }} className='btn'>
          <button><i class="fa-regular fa-envelope"></i>Log In with Email</button></Link>
        <Link to={{
          pathname: '/login-info',
          search: '?method=login'
        }} className='btn'>
          <button > <i class="fa-solid fa-phone "></i>Log In with Number</button></Link>
        <Link to={{
          pathname: '/login-info',
          search: '?method=signup'
        }} style={{ textDecoration: 'none' }}><h4>New to OLX? Create an account</h4></Link>
      </div>
    </div>
  )
}
