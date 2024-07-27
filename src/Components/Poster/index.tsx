import posterImg from "../../assets/posterImg.png";
import {ArrowSvg} from "../SVGC";
import styles from "./_poster.module.scss"

export const Poster = () => {
  return (
    <div className={styles.poster}>
      <div className={styles.content}>
        <h1>Демо-версия</h1>
        <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов.
          Используя знания и накопленный опыт мы можем предложить </p>
        <button
          type="button"
        >
          Попробовать бесплатно
          <ArrowSvg/>
        </button>
      </div>
      <img src={posterImg} alt="poster img"/>
    </div>
  );
};