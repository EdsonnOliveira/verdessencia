import Header from "@/components/Header";
import Onboarding from "@/components/Onboarding";
import QuemSomos from "@/components/QuemSomos";
import PropostaValor from "@/components/PropostaValor";
import ParaQuem from "@/components/ParaQuem";
import Solucoes from "@/components/Solucoes";
import Diferenciais from "@/components/Diferenciais";
import HistoriasImpacto from "@/components/HistoriasImpacto";
import PorQueSerSustentavel from "@/components/PorQueSerSustentavel";
import ChamadoFinal from "@/components/ChamadoFinal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="hero">
        <Onboarding />
      </div>
      <div id="quem-somos">
        <QuemSomos />
      </div>
      <PropostaValor />
      <ParaQuem />
      <div id="solucoes">
        <Solucoes />
      </div>
      <Diferenciais />
      <HistoriasImpacto />
      <PorQueSerSustentavel />
      <div id="chamado-final">
        <ChamadoFinal />
      </div>
      <div id="contato">
        <Footer />
      </div>
    </div>
  );
}