import React from "react";
import className from "classnames/bind";
import Logo from "~/assets/images/logo.png";
import googleIcon from "~/assets/images/googleIcon.png";
import styles from "./Signup.module.scss";
const cx = className.bind(styles);
function Signup({ setShowSignup, setShowLogin, setShowSignupBusiness }) {
  const handleClickLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupBusiness = () => {
    setShowSignup(false);
    setShowSignupBusiness(true);
  };
  return (
    <div className={cx("signup-wrapper")}>
      <div className={cx("signup-container")}>
        <div className={cx("normal")}>
          <div className={cx("close")}>
            <div
              className={cx("close-btn")}
              onClick={() => setShowSignup(false)}
            >
              <i className={cx("fa-solid fa-xmark", "icon")}></i>
            </div>
          </div>
          <div className={cx("logo")}>
            <img src={Logo} alt="logo-img" className={cx("logo-image")} />
          </div>
          <div className={cx("welcome")}>
            <div className={cx("text")}>Welcome to Pesterin</div>
          </div>
          <div className={cx("sub-heading")}>
            <div className={cx("text")}>Find new ideas to try</div>
          </div>

          {/* Form signup */}
          <div className={cx("form-login-wrapper")}>
            <div className={cx("form-login-container")}>
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
                {/* Birthday */}
                <div className={cx("birthday")}>
                  <div className={cx("birthday-text")}>Birthday</div>
                  <div className={cx("birthday-input")}>
                    <input
                      type="date"
                      placeholder="Birthday"
                      pattern="\d{2}/\d{2}/\d{4}"
                      className={cx("input")}
                    />
                  </div>
                </div>
                {/* Signup button */}
                <div className={cx("signup-btn")}>
                  <button className={cx("btn")}>Continue</button>
                </div>
              </div>
              <div className={cx("or")}>OR</div>
              {/* Signup google */}
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

              {/* Login */}
              <div className={cx("login")}>
                <div className={cx("login-content")}>
                  <div className={cx("main-text")}>
                    Already a member?{" "}
                    <span className={cx("mark")} onClick={handleClickLogin}>
                      {" "}
                      Log in
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("business")} onClick={handleSignupBusiness}>
          <div className={cx("business-text")}>
            Create a free business account
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
