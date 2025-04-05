export default function PokemonsApp() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-lg border border-cyan-500 bg-gray-900 p-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        <div className="mb-6 text-center">
          <h1 className="mb-2 font-mono text-2xl font-bold uppercase tracking-wider text-cyan-400">
            CYBER<span className="text-purple-400">POKEMON</span>
          </h1>
          <div className="relative mb-6 overflow-hidden rounded-md border border-cyan-500 bg-gray-900 p-4">
            <div className="absolute inset-0 opacity-10 [background:repeating-linear-gradient(135deg,#06b6d4,#06b6d4_10px,transparent_10px,transparent_20px)]"></div>
            <div className="relative z-10 font-mono text-5xl font-bold text-cyan-400 tabular-nums">
              {/* Pokemon Data */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
