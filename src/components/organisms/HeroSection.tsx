import { JSX } from "hono/jsx";

export const HeroSection = () => (
  <section className="bg-zinc-900/30 py-12 border-b border-zinc-800">
    <div className="max-w-7xl mx-auto px-4 text-center">
         <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
           A Agência de Contingência de <br/>
           <span className="text-yellow-500">Quem Você Conhece.</span>
         </h1>
         <p className="text-gray-400 max-w-2xl mx-auto mb-8">
           Segurança, qualidade e suporte 24/7 porque aqui é de casa, e a gente garante.
         </p>
         <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-600/50 px-6 py-3 rounded-lg text-yellow-500 cursor-pointer hover:bg-yellow-600/30 transition-colors">
            <span>▶ Assistir Vídeo de Apresentação</span>
         </div>
    </div>
  </section>
);