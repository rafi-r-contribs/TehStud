import classes from "../styles/Video.module.css";

export default function Video({ title, id, noq }) {
  return (
    <div className={classes.video}>
      <img
        src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
        alt={title}
      />
      <p>{title}</p>
      <div className={classes.qmeta}>
        <p>{noq} 問</p>
        <p>総合点 : {noq * 5}</p>
      </div>
    </div>
  );
}
