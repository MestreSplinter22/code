import { JSX } from "hono/jsx";

export const CtaBanner = () => (
  <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800 relative overflow-hidden">
      <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">Não encontrou o que procurava?</h3>
          <p className="text-gray-400 mb-6">Atendemos sob encomenda! Nos peça no WhatsApp.</p>
          <a href="#" className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition">
              Fazer pedido personalizado (WhatsApp)
          </a>
      </div>
  </div>
);