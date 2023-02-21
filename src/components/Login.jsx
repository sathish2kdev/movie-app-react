import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/Login.css"
import { loginAction } from "../redux/action";
import { baseUrl1, loginURl } from "../urlConstant";

const Login = () => {

    const [userName,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const [remember,setRemember] = useState(false);

    const dispatch = useDispatch();
    const select  = useSelector((store) => store.loginValidate) ;
    const navigate = useNavigate()

    const logInAction = async(e) => {
        e.preventDefault();
        let link = baseUrl1+loginURl+userName+"&password="+password;
 
        const headers = {
            "Content-type": "application/x-www-form-urlencoded"
        };

        try {
            const loginApi = await axios.post(link,{"headers":headers});
            console.log(loginApi);
            if(loginApi != null && loginApi.data != null && loginApi.data.loginStatus === "Success"){
                localStorage.setItem("AuthToken",loginApi.data.token);
                localStorage.setItem("refreshToken",loginApi.data.refreshToken);
                navigate("/");
               }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Invalid Username Or Password!',
              })
        }

        
    
    }   


   /* const logInAction = (e) => {
        e.preventDefault();
      dispatch(loginAction(userName,password));
    //    console.log(window.btoa(userName + ":" + password));
    console.log(select);
       if(select != null && select.data != null && select.data.loginStatus === "Success"){
        navigate("/");
       }else if(select != null && select.code === "ERR_BAD_REQUEST"){
        // alert("INVALID USERNAME OR PASSWORD");
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
       }
    } */

    return (
        <>
        <div className="coniner-fluid structure">
            <div className="login-image">
            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-3 mx-auto Login-card px-5 pt-5 pb-2">
                    <div className="sign-In-card mx-auto">
                    <p className="header-tag">Sign In</p>
                    <input type="text" placeholder="Email or phone number" name="userName" value={userName || ''} onChange={((e) => setUserName(e.target.value))}/>
                    <input type="text" placeholder="password" name="password"value={password} onChange={((e) => setPassword(e.target.value))} />
                    <button type="button" className="btn btn-danger" onClick={logInAction}>Sign In</button>
                    <div className="remeber-check">
                    <span className=""><input type="checkbox" className="check-remember" name="remeber" value={remember}  onChange={((e) => setRemember(e.target.value))}/><p className="checked-p">Remeber Me</p></span>
                    <p className="p-tg-value">Need help?</p>
                    </div>
                    <div className="footer-tag px-3">
                        <p className="section-1">New To CopyFlex? <strong>Sign Up Now</strong></p>
                        <p className="section-2">This page is protected by Google reCAPTCHA to
                            ensure you're not a bot. <a href="">learn more</a>
                        </p>
                    </div>
                    </div>
                   
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Login;