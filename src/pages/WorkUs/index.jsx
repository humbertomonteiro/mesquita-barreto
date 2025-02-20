import styles from "./workUs.module.css";
import Title from "../../components/shared/Title";
import useFormSubmit from "../../hooks/useFormSubmit";
import { useState } from "react";

const WorkUs = () => {
  const { handleSubmit, loading, error, success } = useFormSubmit(
    "trabalhe_conosco",
    ["name", "email", "number", "file", "message"]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    file: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" ||
        file.type ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    ) {
      setFormData((prev) => ({ ...prev, file }));
    } else {
      alert("Por favor, selecione um arquivo PDF ou DOCX.");
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Por favor, selecione um arquivo PDF ou DOCX.");
      return;
    }
    handleSubmit(formData);
  };

  return (
    <div className={styles.container}>
      <Title text="Trabalhe Conosco" />

      <p>
        Tem interesse em se juntar a nossa equipe? Envie seu currículo para nós
        e conte um pouco sobre você.
      </p>

      <form onSubmit={onSubmit}>
        <label>
          <p>Nome</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <p>E-mail</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <p>Telefone</p>
          <input
            type="number"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          <p>Anexar currículo (PDF ou DOCX)</p>
          <input
            className={styles.file}
            accept=".pdf,.docx"
            onChange={handleFileChange}
            type="file"
            required
          />
        </label>

        <label>
          <p>Mensagem</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <p>
          Ao preencher o formulário você concorda com os termos de nossa
          política de privacidade.
        </p>
        <button data-button="1" type="submit" disabled={loading}>
          {loading ? "Enviando mensagem..." : "Enviar mensagem"}
        </button>
      </form>
      {success && <p style={{ color: "green" }}>Dados enviados com sucesso!</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default WorkUs;
