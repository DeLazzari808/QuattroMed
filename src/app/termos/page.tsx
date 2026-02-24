import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termos de Uso e Política de Privacidade | QuatroMed',
  description: 'Termo de uso e política de privacidade da plataforma de telemedicina QuatroMed.',
};

export default function TermosDeUsoEPrivacidade() {
  return (
    <main
      className="min-h-screen py-12 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #153D4A 0%, #1A4B5C 50%, #2A5F72 100%)',
      }}
    >
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium mb-6 transition-colors"
        >
          &larr; Voltar ao site
        </Link>

        <article className="bg-white p-6 sm:p-10 rounded-2xl shadow-xl text-gray-700 leading-relaxed">
          <header className="mb-10 text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
              LSX MEDICAL
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-slate-600">
              TERMO DE USO E POLÍTICA DE PRIVACIDADE
              <br />
              PLATAFORMA DE TELEMEDICINA
            </h2>
          </header>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">1. Introdução</h3>
            <p className="mb-3">
              Este Termo de Uso e Política de Privacidade estabelece as regras, condições e práticas
              adotadas para a utilização da plataforma de telemedicina, bem como descreve como os dados
              pessoais dos usuários são coletados, utilizados, armazenados e protegidos.
            </p>
            <p>
              Ao acessar ou utilizar a plataforma, o usuário declara estar ciente e de acordo com este
              documento.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">2. Definições</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Plataforma:</strong> sistema digital de telemedicina disponibilizado ao usuário.
              </li>
              <li>
                <strong>Usuário:</strong> pessoa física que utiliza a plataforma para agendamento,
                consultas ou outros serviços.
              </li>
              <li>
                <strong>Dados pessoais:</strong> informações que identificam ou podem identificar o
                usuário.
              </li>
              <li>
                <strong>Dados sensíveis:</strong> dados relacionados à saúde, conforme definido pela
                LGPD.
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              3. Informações Coletadas
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-800">3.1 Dados cadastrais</h4>
                <p>Nome completo, CPF, e-mail, telefone, data de nascimento.</p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">3.2 Dados de saúde</h4>
                <p>
                  Informações clínicas necessárias ao atendimento médico, prontuários, prescrições e
                  registros de consulta.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">3.3 Dados financeiros</h4>
                <p>
                  Informações necessárias para processamento de pagamentos, quando aplicável.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-slate-800">3.4 Dados de uso</h4>
                <p>
                  Endereço IP, data e hora de acesso, informações de navegação e interação com a
                  plataforma.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              4. Finalidade do Uso dos Dados
            </h3>
            <p>
              Prestação de serviços de telemedicina, agendamentos, comunicação com o usuário,
              cumprimento de obrigações legais e melhoria da plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              5. Compartilhamento de Dados
            </h3>
            <p>
              Profissionais de saúde, prestadores de serviço essenciais e autoridades legais, quando
              exigido. Não realizamos a venda de dados pessoais.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              6. Armazenamento e Segurança da Informação
            </h3>
            <p>
              Criptografia, controle de acesso, monitoramento e armazenamento seguro, respeitando
              prazos legais.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              7. Direitos do Titular dos Dados
            </h3>
            <p>
              Acesso, correção, exclusão quando aplicável, revogação de consentimento e informações
              sobre tratamento de dados.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              8. Responsabilidades do Usuário
            </h3>
            <p>
              Fornecer informações verdadeiras, manter confidencialidade e utilizar a plataforma
              conforme este termo.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              9. Alterações deste Documento
            </h3>
            <p>
              Este documento poderá ser atualizado a qualquer momento. A versão vigente estará sempre
              disponível na plataforma.
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold text-slate-900 mb-3 border-b pb-2">
              10. Canal de Contato
            </h3>
            <p>
              O usuário deverá entrar em contato pelos canais oficiais disponibilizados na plataforma.
            </p>
          </section>

          <footer className="mt-12 pt-6 border-t text-sm text-slate-500 text-center">
            <p>Última atualização: Fevereiro de 2026</p>
          </footer>
        </article>
      </div>
    </main>
  );
}
