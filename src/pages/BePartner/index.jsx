import styles from "./bePartner.module.css";
import Title from "../../components/shared/Title";

import { useState, useEffect } from "react";

import useFormSubmit from "../../hooks/useFormSubmit";

const BePartner = () => {
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);
  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [carregandoEstados, setCarregandoEstados] = useState(true);
  const [carregandoCidades, setCarregandoCidades] = useState(false);

  const { handleSubmit, loading, error, success } = useFormSubmit(
    "seja_um_parceiro",
    ["name", "email", "number", "uf", "city", "message"]
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    uf: "",
    city: "",
    message: "",
  });

  useEffect(() => {
    const fetchEstados = async () => {
      try {
        const response = await fetch(
          "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
        );
        const data = await response.json();
        setEstados(data.sort((a, b) => a.nome.localeCompare(b.nome))); // Ordenar por nome
      } catch (error) {
        console.error("Erro ao carregar estados:", error);
      } finally {
        setCarregandoEstados(false);
      }
    };

    fetchEstados();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
  };

  useEffect(() => {
    if (!estadoSelecionado) {
      setCidades([]);
      return;
    }

    const fetchCidades = async () => {
      setCarregandoCidades(true);
      try {
        const response = await fetch(
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`
        );
        const data = await response.json();
        setCidades(data);
      } catch (error) {
        console.error("Erro ao carregar cidades:", error);
      } finally {
        setCarregandoCidades(false);
      }
    };

    fetchCidades();
  }, [estadoSelecionado]);

  return (
    <div className={styles.container}>
      <Title text="Seja um Parceiro" />

      <p>
        Quer se tornar um parceiro? Preencha o formulário e envie sua proposta
        para nós.
      </p>

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
          <p>UF</p>
          <select
            id="estado"
            value={formData.uf} // Atualizado para usar formData.uf
            name="uf"
            onChange={(e) => {
              setEstadoSelecionado(e.target.value); // Atualiza o estado selecionado
              handleChange(e); // Atualiza o formData
            }}
            disabled={carregandoEstados}
          >
            <option value="">
              {carregandoEstados
                ? "Carregando estados..."
                : "Selecione um estado"}
            </option>
            {estados.map((estado) => (
              <option key={estado.id} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
          </select>
        </label>

        <label>
          <p>Cidade</p>
          <select
            id="cidade"
            name="city"
            value={formData.city} // Certifique-se de que está sincronizado com formData
            onChange={handleChange}
            disabled={!formData.uf || carregandoCidades}
          >
            <option value="">
              {carregandoCidades
                ? "Carregando cidades..."
                : "Selecione um estado primeiro"}
            </option>
            {cidades.map((cidade) => (
              <option key={cidade.id} value={cidade.nome}>
                {cidade.nome}
              </option>
            ))}
          </select>
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

export default BePartner;
