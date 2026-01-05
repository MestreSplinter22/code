import { JSX } from "hono/jsx";

export interface CtaBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

export const CtaBanner = ({ title, description, buttonText, buttonLink }: CtaBannerProps) => (
  <div className="mt-16 bg-zinc-900 rounded-2xl p-8 text-center border border-zinc-800 relative overflow-hidden">
      <div className="relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-6">{description}</p>
          <a href={buttonLink} className="inline-block bg-green-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition">
              {buttonText}
          </a>
      </div>
  </div>
);