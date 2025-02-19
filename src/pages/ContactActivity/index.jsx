import styles from "./contactActivity.module.css";
import Title from "../../components/shared/Title";

import { useState } from "react";
import { useParams } from "react-router-dom";

import useFormSubmit from "../../hooks/useFormSubmit";

const ContactActivity = () => {
  const { activity } = useParams();

  if (!activity) {
    return <p>Atividade não encontrada.</p>;
  }

  const activityTitles = {
    "blindagem-patrimonial": "Blindagem Patrimonial",
    "reducao-de-impostos": "Redução de Impostos",
    "planejamento-tributario": "Planejamento Tributário",
    holding: "Holding",
  };

  if (!activity || !activityTitles[activity]) {
    return <p>Atividade não encontrada.</p>;
  }

  const title = activityTitles[activity];

  const { handleSubmit, loading, error, success } = useFormSubmit(
    "assunto_especifico",
    ["name", "email", "number", "subject", "message"]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    subject: title || "Assunto Genérico",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const redirectToWhatsApp = (name, subject, message) => {
    const phoneNumber = "5585996135771";

    const text = `Olá! Vim do site. \n\nMe chamo *${name}*. \n\nQuero falar sobre: *${subject}*. \n\nEste é o resumo do meu caso: \n\n*${message}*.`;

    const encodedText = encodeURIComponent(text);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

    // window.location.href = whatsappUrl;
    window.open(whatsappUrl, "_blank");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    redirectToWhatsApp(formData.name, formData.subject, formData.message);
  };

  return (
    <div className={styles.container}>
      <Title text={title} />

      <h3>Vamos conversar sobre seu caso?</h3>

      <form onSubmit={onSubmit}>
        <label>
          <p>Nome</p>
          <input type="text" name="name" onChange={handleChange} required />
        </label>

        <label>
          <p>E-mail</p>
          <input type="email" name="email" onChange={handleChange} required />
        </label>

        <label>
          <p>Telefone</p>
          <input type="number" name="number" onChange={handleChange} required />
        </label>

        <label>
          <p>Menssagem</p>
          <textarea
            type="text"
            name="message"
            onChange={handleChange}
            required
          />
        </label>
        <p>
          Ao preencher o formulário você concorda com os termos de nossa
          política de privacidade.
        </p>
        <button type="submit" disabled={loading}>
          {loading ? "Enviando menssagem..." : "Enviar menssagem"}
        </button>
      </form>
      {success && <p>Enviado com sucesso!</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ContactActivity;
