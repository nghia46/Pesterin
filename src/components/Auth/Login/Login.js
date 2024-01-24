import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Logo from "~/assets/images/logo.png";
import googleIcon from "~/assets/images/googleIcon.png";
import styles from "./Login.module.scss";
const cx = classNames.bind(styles);
function Login({ setShowLogin, setShowSignup }) {
  const handleClickSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };
  return (
    <div className={cx("login-wrapper")}>
      <div className={cx("login-container")}>
        <div className={cx("close")} onClick={() => setShowLogin(false)}>
          <div className={cx("close-btn")}>
            <i className={cx("fa-solid fa-xmark", "icon")}></i>
          </div>
        </div>
        <div className={cx("logo")}>
          <img src={Logo} alt="logo-img" className={cx("logo-image")} />
        </div>
        <div className={cx("welcome")}>
          <div className={cx("text")}>Welcome to Pesterin</div>
        </div>

        <div className={cx("form-login-wrapper")}>
          <div className={cx("form-login-container")}>
            {/* Form login */}
            <div className={cx("form-content")}>
              {/* Email */}
              <div className={cx("email")}>
                <div className={cx("email-text")}>Email</div>
                <div className={cx("email-input")}>
                  <input
                    type="text"
                    placeholder="Email"
                    spellCheck={false}
                    autoFocus={true}
                    className={cx("input")}
                  />
                </div>
              </div>
              {/* Password */}
              <div className={cx("password")}>
                <div className={cx("password-text")}>Password</div>
                <div className={cx("password-input")}>
                  <input
                    type="password"
                    placeholder="Password"
                    spellCheck={false}
                    className={cx("input")}
                  />
                </div>
              </div>
              {/* Forget password */}
              <div className={cx("forgot-password")}>
                <Link to="/reset" className={cx("reset")}>
                  Forgot your password?
                </Link>
              </div>
              {/* Login button */}
              <div className={cx("login-btn")}>
                <button className={cx("btn")}>Log in</button>
              </div>
            </div>
            <div className={cx("or")}>OR</div>
            {/* Login google */}
            <div className={cx("login-google-action")}>
              <button className={cx("login-google-btn")}>
                <img
                  src={googleIcon}
                  alt="google-icon"
                  className={cx("google-icon")}
                />
                <span className={cx("text")}>Continue with google</span>
                <span className={cx("empty")}></span>
              </button>
            </div>

            {/* Information text */}
            <div className={cx("information")}>
              <div className={cx("text")}>
                By continuing, you agree to Pesterin's.{" "}
                <span className={cx("mark")}>Terms of Service</span> and
                acknowledge you've read our.{" "}
                <span className={cx("mark")}>Privacy Policy</span>.{" "}
                <span className={cx("mark")}>Notice at collection</span>
              </div>
            </div>

            {/* Line */}
            <div className={cx("line")}>
              <div className={cx("line-inside")}></div>
            </div>

            {/* Signup */}
            <div className={cx("signup")}>
              <div className={cx("signup-content")}>
                <div className={cx("main-text")}>
                  Not on Pesterin yet?{" "}
                  <span className={cx("mark")} onClick={handleClickSignup}>
                    {" "}
                    Sign up
                  </span>
                </div>
                <div className={cx("sub-text")}>
                  Are you a business?{" "}
                  <span className={cx("mark")}>Get started here!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
