"use client"

import { ChevronDown } from "lucide-react"

export default function SoftSkillCard({ skill, expandedSkill, setExpandedSkill }) {
  const Icon = skill.icon
  const isExpanded = expandedSkill === skill.name

  return (
    <div
      className="group relative"
      style={{
        animation: `fadeInScale 0.5s ease-out both`,
      }}
    >
      <div
        className={`
          relative p-6 rounded-2xl  border-2 transition-all duration-500 ease-in-out cursor-pointer
          min-h-[235px]
          ${isExpanded
            ? "bg-card border-primary shadow-2xl scale-105"
            : "bg-card/50 border-white/10  hover:border-primary/50 hover:shadow-lg"
          }
        `}
        onClick={() => setExpandedSkill(isExpanded ? null : skill.name)}
      >
        {/* Icono de la habilidad */}
        <div
          className={`
            w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} 
            flex items-center justify-center mb-4 transition-transform duration-300 
            ${isExpanded ? "scale-110" : "group-hover:scale-105"}
          `}
        >
          <Icon className="w-7 h-7 text-white" />
        </div>

        {/* Título y descripción */}
        <h3 className="text-xl font-bold mb-2 text-balance">{skill.name}</h3>
        <p className="text-muted-foreground text-sm mb-4 text-pretty">
          {skill.description}
        </p>

        {/* Contenido expandido */}
        <div
          className={`
            overflow-hidden transition-all duration-500 ease-in-out
            ${isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="pt-4 border-t border-border mb-4">
            <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wide">
              Ejemplos
            </p>
            <ul className="space-y-2">
              {skill.examples.map((example, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${skill.color} flex-shrink-0`}
                  />
                  <span className="text-pretty">{example}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Flecha animada */}
        <div
          className={`
            absolute bottom-4 right-4 text-muted-foreground 
            transition-transform duration-300
            ${isExpanded ? "rotate-180" : "rotate-0"}
          `}
        >
          <ChevronDown size={18} strokeWidth={2.5} />
        </div>
      </div>
    </div>
  )
}
