import { useState } from 'react';
import { Link } from 'react-router';
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  Home,
  Zap,
} from 'lucide-react';
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis/todosApi';

export default function TodoApp() {
  const [activeTodoIndex, setActiveTodoIndex] = useState(1);

  const { data: todos } = useGetTodosQuery();
  const { data: todo, isLoading, error } = useGetTodoByIdQuery(activeTodoIndex);

  const handlePrevious = () => {
    if (activeTodoIndex === 1) return;
    setActiveTodoIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    if (!todos) return;
    setActiveTodoIndex((prev) => (prev < todos.length - 1 ? prev + 1 : prev));
  };

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-2xl">
        <header className="mb-8 text-center">
          <Link
            to="/"
            className="group mb-6 inline-flex items-center gap-2 font-mono text-sm text-emerald-400 transition-colors hover:text-emerald-300"
          >
            <Home
              size={16}
              className="transition-transform group-hover:-translate-x-1"
            />
            RETURN TO MAIN SYSTEM
          </Link>

          <h1 className="mb-2 font-mono text-3xl font-bold uppercase tracking-wider text-emerald-400">
            CYBER<span className="text-gray-400">TASKS</span>
          </h1>
          <p className="font-mono text-gray-400">
            Neural Task Management System // v1.0.2
          </p>
        </header>

        {isLoading ? (
          <div className="flex h-64 items-center justify-center">
            <div className="flex flex-col items-center">
              <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-t-2 border-emerald-500"></div>
              <p className="mt-4 font-mono text-emerald-400">
                LOADING TASKS...
              </p>
            </div>
          </div>
        ) : error ? (
          <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-red-800 bg-red-900/20 p-6">
            <XCircle className="mb-4 h-12 w-12 text-red-500" />
            <p className="text-center font-mono text-red-400">
              {error instanceof Error
                ? error.message
                : 'An unexpected error occurred.'}
            </p>
          </div>
        ) : todos && todos.length > 0 ? (
          <div className="relative overflow-hidden rounded-lg border border-emerald-800 bg-gray-900 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
            {/* Task display */}
            <div className="relative p-6">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-xl"></div>

              <div className="mb-4 flex items-center justify-between">
                <div className="rounded-full bg-gray-800 px-3 py-1">
                  <span className="font-mono text-xs text-gray-400">
                    TASK ID:{' '}
                  </span>
                  <span className="font-mono text-xs text-emerald-400">
                    #{todo?.id.toString().padStart(3, '0')}
                  </span>
                </div>
                <div className="rounded-full bg-gray-800 px-3 py-1">
                  <span className="font-mono text-xs text-gray-400">
                    USER:{' '}
                  </span>
                  <span className="font-mono text-xs text-emerald-400">
                    {todo?.userId}
                  </span>
                </div>
              </div>

              <div className="mb-6 rounded-lg border border-emerald-800 bg-gray-800/50 p-4">
                <h2 className="font-mono text-lg text-emerald-400">
                  {todo?.title}
                </h2>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-gray-400">STATUS:</span>
                {todo?.completed ? (
                  <div className="flex items-center gap-2 rounded-full bg-emerald-900/30 px-3 py-1 text-emerald-400">
                    <CheckCircle size={16} />
                    <span className="font-mono text-sm">COMPLETED</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-2 rounded-full bg-yellow-900/30 px-3 py-1 text-yellow-400">
                    <XCircle size={16} />
                    <span className="font-mono text-sm">PENDING</span>
                  </div>
                )}
              </div>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm font-mono text-gray-500">
                  TASK {activeTodoIndex} OF {todos.length}
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevious}
                    disabled={activeTodoIndex === 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800 bg-gray-900 text-emerald-400 transition-all hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={activeTodoIndex === todos.length - 1}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-800 bg-gray-900 text-emerald-400 transition-all hover:border-emerald-500 hover:shadow-[0_0_10px_rgba(16,185,129,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="h-1 w-full bg-gray-800">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-300"
                style={{
                  width: `${(activeTodoIndex / todos.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-emerald-800 bg-gray-900 p-6">
            <p className="text-center font-mono text-emerald-400">
              NO TASKS FOUND IN DATABASE
            </p>
          </div>
        )}

        <footer className="mt-12 border-t border-gray-800 pt-4 text-center">
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-emerald-500"></div>
            <Zap size={14} className="text-emerald-500" />
            <div className="font-mono text-xs text-gray-500">
              NEURAL LINK ACTIVE
            </div>
            <Zap size={14} className="text-emerald-500" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-emerald-500"></div>
          </div>
        </footer>
      </div>
    </div>
  );
}
