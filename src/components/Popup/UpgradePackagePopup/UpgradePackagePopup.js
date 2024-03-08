import React from "react";
import classNames from "classnames/bind";
import {
  businessPackageDatas,
  enterprisePackageDatas,
} from "~/datas/packageDatas";
import styles from "./UpgradePackagePopup.module.scss";
const cx = classNames.bind(styles);
function UpgradePackagePopup({ setShowUpgradePackage }) {
  return (
    <div className={cx("upgrade-package-wrapper")}>
      <div className={cx("upgrade-package-container")}>
        <div className={cx("upgrade-package-content")}>
          <div className={cx("upgrade-package-introduction")}>
            <div className={cx("type-of-package")}>
              <div className={cx("empty")}></div>
              <div className={cx("text")}>Upgrade Pricing</div>
              <div
                className={cx("close")}
                onClick={() => setShowUpgradePackage(false)}
              >
                <i className={cx("fa-solid fa-xmark", "icon")}></i>
              </div>
            </div>
            <div className={cx("head-title")}>
              Upgrade for Exciting Features
            </div>
            <div className={cx("description")}>
              Upgrade now for a better art-sharing experience and unlock
              exciting new features.
            </div>
          </div>
          <div className={cx("upgrade-package-information")}>
            <div className={cx("package-list")}>
              <div className={cx("package-item")}>
                <div className={cx("pricing-container")}>
                  <div className={cx("price")}>
                    ${businessPackageDatas.price}
                  </div>
                  <div className={cx("type-package")}>
                    {businessPackageDatas.type} plan
                  </div>
                </div>
                <div className={cx("feature-container")}>
                  {businessPackageDatas.features.map((feature) =>
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
                  <button className={cx("action-btn")}>Get started</button>
                </div>
              </div>
              <div className={cx("package-item")}>
                <div className={cx("pricing-container")}>
                  <div className={cx("price")}>
                    ${enterprisePackageDatas.price}
                  </div>
                  <div className={cx("type-package")}>
                    {enterprisePackageDatas.type} plan
                  </div>
                </div>
                <div className={cx("feature-container")}>
                  {enterprisePackageDatas.features.map((feature) =>
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

export default UpgradePackagePopup;
