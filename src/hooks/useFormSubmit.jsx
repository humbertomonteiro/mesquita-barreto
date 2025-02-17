import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwKligUkExj3yW0mo0RoTRcj6YDJQ2s4f5rGwaFsiiYCj3XPuWMZtON5-uv1Fhyie3xSQ/exec";

const useFormSubmit = (sheetName, fields) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append("action", sheetName);

    // Adiciona os campos dinamicamente
    fields.forEach((field) => {
      formDataToSend.append(field, formData[field]);
    });

    // Caso tenha um arquivo (para o formulário de "trabalhe conosco")
    if (formData.file) {
      const base64 = await convertFileToBase64(formData.file);
      formDataToSend.append("file", base64);
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error("Erro ao enviar os dados.");
      }

      const responseText = await response.text();
      console.log(responseText);

      setSuccess(true);
    } catch (err) {
      setError("Erro ao enviar os dados. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error, success };
};

// Função para converter arquivo para Base64
const convertFileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Remove o prefixo "data:*/*;base64,"
    reader.onerror = (error) => reject(error);
  });
};

export default useFormSubmit;
