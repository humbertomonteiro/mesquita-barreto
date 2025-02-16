import { Link } from "react-router-dom";
import Title from "../../components/shared/Title";
import styles from "./contacts.module.css";

const Contacts = () => {
  return (
    <div className={styles.container}>
      <Title text="Fale Conosco" />
      <section className={styles.contacts}>
        <div className={styles.info}>
          <div className={styles.boxInfo}>
            <h3>Informações de contato</h3>
            <p>Av. Washington Soares, 3663, sala 1301, Torre 2 – WSTC</p>
            <p>Edson Queiroz, Fortaleza – CE</p>
            <p>CEP 60.811-341</p>
          </div>
          <div className={styles.boxInfo}>
            <h3>E-mail e Telefone</h3>
            <p>Telefone: (85) 9 9661-7421</p>
            <p>E-mail: contato@tuliomagno.com.br</p>
          </div>
          <Link to="/work-us">Trabalhe conosco</Link>
        </div>
        <form>
          <label>
            <p>Nome</p>
            <input type="text" required />
          </label>

          <label>
            <p>E-mail</p>
            <input type="text" required />
          </label>

          <label>
            <p>Telefone</p>
            <input type="text" required />
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
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3404405448505!2d-38.4927868250261!3d-3.735782896238133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c7487d2a786281%3A0xfe45fec509471f2c!2sShopping%20P%C3%A1tio%20Dom%20Luis!5e0!3m2!1spt-BR!2sbr!4v1739587190699!5m2!1spt-BR!2sbr"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contacts;
