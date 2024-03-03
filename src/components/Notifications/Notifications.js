import classNames from "classnames/bind";
import { formatDistanceToNow } from "date-fns";
import DOMPurify from "dompurify";
import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import api from "~/services/apiService";

import { getUnreadNotifications } from "~/services/notificationService";
import styles from "./Notifications.modules.scss";
const cx = classNames.bind(styles);

function Notifications({
  userData,
  notifications,
  setNotifications,
  setCountNotifications,
  setShowNotifications,
}) {
  const navigate = useNavigate();
  const getFormattedTimestamp = useMemo((createdAt) => {
    return (createdAt) => {
      const distance = formatDistanceToNow(new Date(createdAt), {
        addSuffix: true,
      });

      if (distance === "less than a minute ago") {
        return "a few seconds ago";
      }
      return distance;
    };
  }, []);

  const handleMarkAsRead = async () => {
    try {
      const notificationResponse = await api.put(
        `/notification/updateAllNotificationsStatus/${userData._id}`
      );
      setNotifications(notificationResponse.data);
      setCountNotifications(0);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClickNotificationItem = async (notify) => {
    try {
      const notificationListResponse = await api.put(
        `/notification/updateNotificationStatusById/${notify._id}/${userData._id}`
      );
      const notificationUnreadResponse = await getUnreadNotifications(
        userData._id
      );
      setNotifications(notificationListResponse.data);
      setCountNotifications(notificationUnreadResponse.length);
      navigate(`${notify.hyperLink}`);
      setShowNotifications(false);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={cx("notification-wrapper")}>
      <div className={cx("notification-container")}>
        <div className={cx("notification-heading")}>
          <div className={cx("text")}>Notifications</div>
        </div>
        {notifications.length > 0 && (
          <div className={cx("mark-as-read")}>
            <button
              className={cx("mark-as-read-btn")}
              onClick={handleMarkAsRead}
            >
              Mark as read
            </button>
          </div>
        )}
        {notifications.length > 0 && (
          <div className={cx("notification-list")}>
            {notifications.map((notify) => (
              <div
                className={cx("notification-item")}
                key={notify._id}
                onClick={() => handleClickNotificationItem(notify)}
              >
                <div className={cx("user-avatar")}>
                  <img
                    src={notify?.posterAvatar}
                    alt="user-avt"
                    className={cx("avatar")}
                  />
                </div>
                <div className={cx("notification-info")}>
                  <div
                    className={cx("notification-content")}
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(notify.content),
                    }}
                  />
                  <div className={cx("notification-date")}>
                    {getFormattedTimestamp(notify.createdAt)}
                  </div>
                </div>
                {notify.status === false && (
                  <div className={cx("dot-wrapper")}>
                    <div className={cx("dot")}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications;
