import classNames from "classnames/bind";

import { freePackageDatas } from "~/datas/packageDatas";
import HeaderNoSearch from "~/layouts/HeaderNoSearch";

import axios from "axios";
import styles from "./Business.module.scss";
const cx = classNames.bind(styles);
function Business({ onLogout }) {
  const handleTryFree = () => {
    axios
      .get(
        "http://localhost:5000/api/v1/vnpay/create_payment_url/200000/65e480f2e2f3c2112ab59e38"
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className={cx("business-wrapper")}>
      <HeaderNoSearch onLogout={onLogout} />
      <div className={cx("business-container")}>
        <div className={cx("package-container")}>
          <div className={cx("package-introduction")}>
            <div className={cx("type-of-package")}>Pricing</div>
            <div className={cx("head-title")}>Best Plans For Business</div>
            <div className={cx("description")}>
              Thank you for considering our services! Below, you will find our
              flexible pricing options tailored to meet your needs.
            </div>
          </div>
          <div className={cx("package-information")}>
            <div className={cx("package-list")}>
              {/* Free */}
              <div className={cx("package-item")}>
                <div className={cx("pricing-container")}>
                  <div className={cx("price")}>{freePackageDatas.price}</div>
                  <div className={cx("type-package")}>
                    {freePackageDatas.type}
                  </div>
                </div>
                <div className={cx("feature-container")}>
                  {freePackageDatas.features.map((feature) =>
                    feature.isCheck === true ? (
                      <div className={cx("feature")} key={feature.id}>
                        <i className={cx("fa-solid fa-check", "icon")}></i>
                        <span className={cx("text")}>{feature.name}</span>
                      </div>
                    ) : (
                      <div
                        className={cx("feature-not-access")}
                        key={feature.id}
                      >
                        <i className={cx("fa-solid fa-xmark", "icon")}></i>
                        <span className={cx("text")}>{feature.name}</span>
                      </div>
                    )
                  )}
                </div>
                <div className={cx("action-container")}>
                  <button className={cx("action-btn")} onClick={handleTryFree}>
                    Try it for free
                  </button>
                </div>
              </div>

              {/* Business */}
              <div className={cx("package-item-popular")}>
                <div className={cx("pricing-container")}>
                  <div className={cx("price")}>$19.99 </div>
                  <div className={cx("type-package")}>Business plan</div>
                </div>
                <div className={cx("feature-container")}>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                </div>
                <div className={cx("action-container")}>
                  <button className={cx("action-btn")}>Get started</button>
                </div>
              </div>

              {/* Enterprise */}
              <div className={cx("package-item")}>
                <div className={cx("pricing-container")}>
                  <div className={cx("price")}>$39,99</div>
                  <div className={cx("type-package")}>Enterprise plan</div>
                </div>
                <div className={cx("feature-container")}>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                  <div className={cx("feature")}>
                    <i className={cx("fa-solid fa-check", "icon")}></i>
                    <span className={cx("text")}>All essential features</span>
                  </div>
                </div>
                <div className={cx("action-container")}>
                  <button className={cx("action-btn")}>Get started</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
