import style from './Section.module.css';

export function Section({ title, children }) {
  return (
    <>
      <h1 className={style.title}>{title}</h1>
      {children}
    </>
  );
}
