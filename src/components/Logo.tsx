interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className || ""}`}>
      <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/70 rounded-lg flex items-center justify-center">
        <span className="text-accent-foreground font-bold text-lg">N</span>
      </div>
      <span className="font-bold text-xl">
        Nexus<span className="text-accent">Automações</span>
      </span>
    </div>
  )
}
