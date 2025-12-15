import { Helmet } from "react-helmet";
import Presentation from "@/components/presentation/Presentation";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Yá - Cuidando de Quem Cuida | Pitch Deck</title>
        <meta name="description" content="Yá é uma assistente financeira no WhatsApp feita para mães solo brasileiras. Uma IA que cuida de quem cuida de todo mundo." />
        <meta property="og:title" content="Yá - Cuidando de Quem Cuida" />
        <meta property="og:description" content="Assistente financeira no WhatsApp para mães solo. 11 milhões de lares. Uma solução." />
      </Helmet>
      <main>
        <Presentation />
      </main>
    </>
  );
};

export default Index;
