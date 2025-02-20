import { Link } from "react-router-dom";
import Title from "../../components/shared/Title";
import styles from "./contacts.module.css";

import { useState } from "react";
import useFormSubmit from "../../hooks/useFormSubmit";

const Contacts = () => {
  const { handleSubmit, loading, error, success } = useFormSubmit("contato", [
    "name",
    "email",
    "number",
    "message",
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  return (
    <div className={styles.container}>
      <Title text="Fale Conosco" />
      <section className={styles.contacts}>
        <div className={styles.info}>
          <div className={styles.boxInfo}>
            <h3>Informações de contato</h3>
            <p>Av. Dom Luís, 1200, sala 1902, Torre 1, Pátio Dom Luís</p>
            <p>Aldeota, Fortaleza – CE</p>
            <p>CEP 60.160-230</p>
          </div>
          <div className={styles.boxInfo}>
            <h3>E-mail e Telefone</h3>
            <p>Telefone: (85) 9 99613-5771</p>
            <p>E-mail: mesquitabarreto33@gmail.com</p>
          </div>
          <Link
            data-button="3"
            to="/work-us"
            style={{ alignSelf: "flex-start" }}
          >
            Trabalhe conosco
          </Link>
        </div>
        <form onSubmit={onSubmit}>
          <label>
            <p>Nome</p>
            <input name="name" type="text" onChange={handleChange} required />
          </label>

          <label>
            <p>E-mail</p>
            <input name="email" type="text" onChange={handleChange} required />
          </label>

          <label>
            <p>Telefone</p>
            <input name="number" type="text" onChange={handleChange} required />
          </label>

          <label>
            <p>Mensagem</p>
            <textarea
              name="message"
              type="text"
              onChange={handleChange}
              required
            />
          </label>
          <p>
            Ao preencher o formulário você concorda com os termos de nossa
            política de privacidade.
          </p>
          <button type="submit" data-button="1">
            {loading ? "Enviando menssagem..." : "Enviar menssagem"}
          </button>
        </form>
        {success && <p>Enviado com sucesso!</p>}
        {error && <p>{error}</p>}
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
