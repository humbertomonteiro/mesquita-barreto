import styles from "./contactActivity.module.css";
import Title from "../../components/shared/Title";

import { useParams } from "react-router-dom";

const ContactActivity = () => {
  const { activity } = useParams();

  const title = activity
    ? activity
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : "";

  return (
    <div className={styles.container}>
      <Title text={title} />

      <h3>Vamos conversar sobre seu caso?</h3>

      <form>
        <label>
          <p>Nome</p>
          <input type="text" required />
        </label>

        <label>
          <p>E-mail</p>
          <input type="email" required />
        </label>

        <label>
          <p>Telefone</p>
          <input type="number" required />
        </label>

        <label>
          <p>Menssagem</p>
          <textarea type="text" required />
        </label>
        <p>
          Ao preencher o formulário você concorda com os termos de nossa
          política de privacidade.
        </p>
        <button>Enviar menssagem</button>
      </form>
    </div>
  );
};

export default ContactActivity;
