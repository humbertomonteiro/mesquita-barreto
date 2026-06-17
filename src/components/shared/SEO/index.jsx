import { Helmet } from "react-helmet-async";

const BASE_URL = "https://www.mesquitabarretoadvocacia.com.br";

const SEO = ({ title, description, canonical }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={`${BASE_URL}${canonical}`} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content={`${BASE_URL}${canonical}`} />
  </Helmet>
);

export default SEO;
