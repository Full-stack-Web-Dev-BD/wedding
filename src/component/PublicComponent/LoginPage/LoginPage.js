import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'
const LoginPage = () => {
  return (
    <div>
      <div className="inputBox">
        <div className="container">
          <div className="logo">
            <img src={require('../../img/logo.png')}/>
          </div>
          <p className="title mb-40 mt-20">Login to JobTick</p>
          <form className="">
            <div className="singleInput mt-15">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="far fa-envelope"/>
                    </span>
                  </div>
                  <input type="email" placeholder="Email" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                  <div class="input-group-append">
                    <span class="input-group-text" style={{cursor:'pointer'}}>
                    </span>
                  </div>
                </div>
            </div>
            <div className="singleInput mt-15">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                    <i class="fas fa-lock"/>
                    </span>
                  </div>
                  <input placeholder="Password" type="password" class="form-control" aria-label="Amount (to the nearest dollar)"/>
                  <div class="input-group-append">
                    <span class="input-group-text" style={{cursor:'pointer'}}>
                    <i class="far fa-eye"/>
                    </span>
                  </div>
                </div>
            </div>
            <Link to='/dashboard'>
              <button className="btn mt-15">Sign in</button>
            </Link>
          </form>
          <footer>
            <span className="text-center haveYet">Dont have an account yet ? </span>
            <span className="text-center contact">Contact us!</span>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default LoginPage