import type { ReactNode } from "react";
import { Card } from "../../../../../../ui/Card";


type CardStackProps = {
  icon: ReactNode;
  title: string;
  topics: string[];
};

export function CardStack({ icon, title, topics }: CardStackProps) {
  return (
    <Card className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-xl flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
        <div className="text-emerald-400 text-lg flex items-center justify-center">
          {icon}
        </div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
      </div>

      {/* Lista de tópicos */}
      <ul className="flex flex-col gap-2">
        {topics.map((topic, index) => (
          <li key={index} className="flex items-start gap-2 text-xs text-zinc-500 leading-relaxed">
            <span className="text-green-400/40 font-normal">|</span>
            <span>{topic}</span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
