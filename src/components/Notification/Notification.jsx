import style from './Notification.module.css';

export function Notification({ message }) {
  return <p className={style.notification}>{message}</p>;
}
