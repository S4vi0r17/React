export default function TodosApp() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-4">
      <div className="relative w-full max-w-4xl">
        {/* Background elements */}
        <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>
        <div className="absolute -bottom-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"></div>
        <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-cyan-800 to-transparent opacity-50"></div>

        {/* Main content */}
        <div className="relative z-10 rounded-lg border border-cyan-800 bg-gray-900/80 p-8 backdrop-blur-sm">
          <header className="mb-12 text-center">
            <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-cyan-400 md:text-5xl lg:text-6xl">
              Todos App
            </h1>
          </header>
          {/* Add your TodosApp content here */}
        </div>
      </div>
    </div>
  );
}
