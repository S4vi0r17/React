import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Calculator,
  Database,
  Zap,
  ChevronRight,
  CheckSquare,
} from 'lucide-react';

export default function HomePage() {
  const [glitchText, setGlitchText] = useState('CYBER_SYSTEM');

  // Glitch effect for the title
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const randomizedText = 'CYBER_SYSTEM'
          .split('')
          .map((char) => {
            if (Math.random() < 0.3) {
              return glitchChars[
                Math.floor(Math.random() * glitchChars.length)
              ];
            }
            return char;
          })
          .join('');

        setGlitchText(randomizedText);

        // Reset after a short delay
        setTimeout(() => {
          setGlitchText('CYBER_SYSTEM');
        }, 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

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
            <div className="mb-2 inline-block rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 px-4 py-1">
              <div className="font-mono text-xs text-cyan-400">
                v2.0.4_ALPHA
              </div>
            </div>
            <h1 className="mb-4 font-mono text-4xl font-bold tracking-tight text-cyan-400 md:text-5xl lg:text-6xl">
              {glitchText}
            </h1>
            <div className="mx-auto h-px w-24 bg-gradient-to-r from-cyan-500 to-purple-500"></div>
            <p className="mt-6 font-mono text-gray-400">
              SELECT MODULE TO INITIALIZE
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link to="/counter" className="group">
              <div className="relative overflow-hidden rounded-lg border border-cyan-800 bg-gray-900 p-6 transition-all duration-300 hover:border-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-cyan-500/10 blur-xl transition-all duration-500 group-hover:bg-cyan-500/20"></div>

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-cyan-500/10">
                  <Calculator className="h-8 w-8 text-cyan-400" />
                </div>

                <h2 className="mb-2 font-mono text-xl font-bold text-cyan-400">
                  CYBER COUNTER
                </h2>

                <p className="mb-4 font-mono text-sm text-gray-400">
                  Quantum-enhanced numerical manipulation module with advanced
                  increment capabilities.
                </p>

                <div className="flex items-center justify-between">
                  <div className="h-px w-12 bg-gradient-to-r from-cyan-500 to-transparent"></div>
                  <ChevronRight className="h-5 w-5 text-cyan-500 transition-all duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              </div>
            </Link>

            <Link to="/pokemons" className="group">
              <div className="relative overflow-hidden rounded-lg border border-purple-800 bg-gray-900 p-6 transition-all duration-300 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-purple-500/10 blur-xl transition-all duration-500 group-hover:bg-purple-500/20"></div>

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-purple-500/10">
                  <Database className="h-8 w-8 text-purple-400" />
                </div>

                <h2 className="mb-2 font-mono text-xl font-bold text-purple-400">
                  CYBER DEX
                </h2>

                <p className="mb-4 font-mono text-sm text-gray-400">
                  Digital monster database with advanced cataloging and
                  biometric analysis capabilities.
                </p>

                <div className="flex items-center justify-between">
                  <div className="h-px w-12 bg-gradient-to-r from-purple-500 to-transparent"></div>
                  <ChevronRight className="h-5 w-5 text-purple-500 transition-all duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              </div>
            </Link>

            <Link to="/todos" className="group">
              <div className="relative overflow-hidden rounded-lg border border-emerald-800 bg-gray-900 p-6 transition-all duration-300 hover:border-emerald-500 hover:shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl transition-all duration-500 group-hover:bg-emerald-500/20"></div>

                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg bg-emerald-500/10">
                  <CheckSquare className="h-8 w-8 text-emerald-400" />
                </div>

                <h2 className="mb-2 font-mono text-xl font-bold text-emerald-400">
                  CYBER TASKS
                </h2>

                <p className="mb-4 font-mono text-sm text-gray-400">
                  Neural task management system with quantum priority allocation
                  algorithms.
                </p>

                <div className="flex items-center justify-between">
                  <div className="h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent"></div>
                  <ChevronRight className="h-5 w-5 text-emerald-500 transition-all duration-300 group-hover:translate-x-1" />
                </div>

                <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
              </div>
            </Link>
          </div>

          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-cyan-500" />
              <div className="font-mono text-xs text-gray-500">
                SYSTEM READY
              </div>
              <Zap size={14} className="text-purple-500" />
            </div>
          </div>
        </div>

        {/* Grid pattern overlay */}
        <div className="pointer-events-none absolute inset-0 z-0 opacity-5">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'linear-gradient(to right, #06b6d4 1px, transparent 1px), linear-gradient(to bottom, #06b6d4 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
