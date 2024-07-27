import styles from "./_logForm.module.scss"
import {CloseFormSvg} from "../SVGC";

export const LogForm = () => {
  return (
    <div className={styles.LogForm}>
      <CloseFormSvg/>
      <form>
        <h1>Вход в систему</h1>
        <div className={styles.inputsContainer}>
          <input
            type="text"
            placeholder="Email/Телефон"
            required
          />
          <input
            type="password"
            placeholder="Пароль"
            required
          />
        </div>
        <label>
          <input type="checkbox" name="rememberMe"/>
          Запомнить пароль
        </label>
        <a href="/">Восстановить</a>
        <div className={styles.controls}>
          <button type="submit" >Войти</button>
          <button type="button" className={styles.signUp}>Зарегестрироваться</button>
        </div>
      </form>
    </div>
  );
};