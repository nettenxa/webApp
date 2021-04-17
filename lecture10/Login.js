
import React, { useState, useContext } from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { AuthContext } from './AuthContext';
import { Redirect } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password")
  });

const checkLogin = (email, password) => {
  if (email === "net@tu.ac.th" && password === "12345678") {
    let data = {name: 'net', email: email, member:'Staff'};
    let context = {token: "mysterios token", userInfo: data, expiresAt: new Date().getTime() + 3600, message:"Login Success"};
    console.log("context:", context)
    return context;
  }
  else 
    return null;
}
const Login = () => {
  const authContext = useContext(AuthContext);
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(
    false
  );
  const [loginLoading, setLoginLoading] = useState(false);

  const submitCredentials = ({email, password}) => {
      setLoginLoading(true);
      let data = checkLogin(email, password);
      if (data) {
        authContext.setAuthState(data);
        setLoginSuccess(data.message);
        setLoginError(null);

        setTimeout(() => {
          setRedirectOnLogin(true);
        }, 700);
      } else {
        setLoginLoading(false);
        setLoginError('Invalid user/password');
        setLoginSuccess(null);
    }
  };

  return (
    <>
    {redirectOnLogin && <Redirect to="/user" />}
    <div>
      
      <div class="grid-container">
        <h1>
          <div div class="grid-item">ร่วมเป็นส่วนหนึ่งกับชุมชน</div>
          <div div class="grid-item">"Thai Egghead"</div>
        </h1>
      
      
      
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values =>
          submitCredentials(values)
        }
        validationSchema={LoginSchema}
      >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
      }) => (
          <form onSubmit={handleSubmit}>
            {loginSuccess && (<div> Login Success {loginSuccess}</div>)}
            {loginError && (<div> Login Error: {loginError} </div>)}
            <br></br>
            <h2>
            {/* <div class="grid-container"> */}
            <label>Email  </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <ErrorMessage name="email" />

            <br></br>
            <label>Password </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              class = "label-Box "
            />
    
            {errors.password && touched.password && errors.password}
            <br></br>
            <button type="submit" disabled={loginLoading}>Sign up</button>
            {loginLoading && <span>Loading...</span>}
            {/* </div> */}
            </h2>
          </form>
          
        )}
      </Formik>
      </div>
    </div>
    </>
  );
};

export default Login;
