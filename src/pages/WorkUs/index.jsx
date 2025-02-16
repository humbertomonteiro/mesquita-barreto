import styles from "./workUs.module.css";
import Title from "../../components/shared/Title";

const WorkUs = () => {
  return (
    <div className={styles.container}>
      <Title text="Trabalhe Conosco" />

      <p>
        Tem interesse em se juntar a nossa equipe? Envie seu currículo para nós
        e conte um pouco sobre você.
      </p>

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
          <p>Anexar currículo</p>
          <input className={styles.file} type="file" />
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

export default WorkUs;
