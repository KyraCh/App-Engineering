import React from 'react'

const Login = () => {
  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self");
  };

  const ucl = () => {
    window.open("http://localhost:5000/auth/ucl", "_self");
  };

  return (
        
    <div className="login-page">
      <img style={{marginLeft:"1200px", paddingTop: "30px"}} src="images/NHSlogo.png"/> 
      <h5 style={{marginLeft:"1200px"}}>Providing NHS Service</h5>
     <div className='art-div'>
    <img src="images/doctor-nurse-image.png"/>
    <img src="images/cross.png" style={{marginBottom:"160px"}}/>
    <img src="images/cross.png" />
    <img src="images/cross.png" />

    </div>
    <div className='login-wrapper' >
    <h1  style={{marginTop:"70px"}}>Log in</h1>
    <div className="login-div" >
    <div className="loginButton google" onClick={google}>
            <img src={"images/google.jpeg"} alt="" className="icon" />
            Google
          </div>
            <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="loginButton ucl" onClick={ucl}>
            <img src={"images/ucl.png"} alt="" className="icon" />
            UCL
        </div>
        </div>
        </div>
        
        </div>
        );
      }
      export default Login;