import styles from "./_logForm.module.scss"
import {CloseFormSvg} from "../SVGC";
import {FC} from "react";

interface LogFormProps {
  isOpen: boolean,
  onClose: () => void,
}

export const LogForm: FC<LogFormProps> = ({isOpen, onClose}) => {
  return (
    <div className={`${styles.wrapper} ${isOpen && styles.show}`}>
      <div className={`${styles.logForm} ${isOpen && styles.show}`}>
        <button
          className={styles.closeBtn}
          type="button"
          onClick={onClose}
        >
          <CloseFormSvg/>
        </button>
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
            <button type="submit">Войти</button>
            <button type="button" className={styles.signUp}>Зарегестрироваться</button>
          </div>
        </form>
      </div>
    </div>
);
};