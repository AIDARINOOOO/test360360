import Link from "next/link"
import { Send, Globe, User } from "lucide-react"
import Image from "next/image"

export default function Page() {
  const links = [
    {
      name: "Telegram",
      url: "https://t.me/apuesta360lat",
      icon: <Send className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/a360clubLatam/",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Website",
      url: "https://a360.bet/es",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      name: "X.com",
      url: "https://x.com/a360club_",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Support",
      url: "https://a360.bet/es/casino",
      icon: <User className="w-5 h-5" />,
    },
  ]

  return (
    <main className="min-h-screen w-full flex items-center justify-center p-6 relative overflow-x-hidden">
      <div className="fixed inset-0 bg-[#1a3a30]" />

      <div className="fixed inset-0 bg-gradient-to-br from-emerald-600/30 via-transparent to-teal-600/25 animate-aurora-slow" />
      <div className="fixed inset-0 bg-gradient-to-tr from-green-500/15 via-emerald-500/20 to-transparent animate-aurora-medium" />
      <div className="fixed inset-0 bg-gradient-to-bl from-transparent via-teal-500/20 to-cyan-600/15 animate-aurora-reverse-slow" />

      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(16,185,129,0.3),transparent_60%)] animate-shimmer-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(20,184,166,0.25),transparent_60%)] animate-shimmer-reverse-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(5,150,105,0.2),transparent_70%)] animate-pulse-slow" />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="w-32 h-32 relative">
            <Image
              src="/images/d0-9b-d0-be-d0-b3-d0-be-20-d0-bf-d0-bd-d0-b3.png"
              alt="A360 Club Logo"
              width={128}
              height={128}
              className="w-full h-full object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Title */}
        <div className="text-center mb-8 animate-fade-in-delay">
          <h1 className="text-3xl font-bold text-white text-balance">A360 Redes Sociales</h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mt-4" />
        </div>

        <div className="space-y-4 animate-fade-in-delay-2">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-[1.02] transition-all duration-300 rounded-2xl px-6 py-4 shadow-xl hover:shadow-2xl"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="flex items-center gap-3">
                <div className="text-white/90 group-hover:text-white transition-colors drop-shadow-md">{link.icon}</div>
                <span className="text-white/90 group-hover:text-white font-semibold text-lg uppercase tracking-wide transition-colors drop-shadow-md">
                  {link.name}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
