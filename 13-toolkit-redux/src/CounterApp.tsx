import { useState } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';
import { useAppDispatch, useAppSelector } from './store/hooks';
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from './store/slices/counter/counterSlice';

export default function CounterApp() {
  const counter = useAppSelector(selectCount);
  const dispatch = useAppDispatch();

  const [incrementBy, setIncrementBy] = useState(5);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-lg border border-cyan-500 bg-gray-900 p-6 shadow-[0_0_20px_rgba(6,182,212,0.5)]">
        <div className="mb-6 text-center">
          <h1 className="mb-2 font-mono text-2xl font-bold uppercase tracking-wider text-cyan-400">
            CYBER<span className="text-purple-400">COUNTER</span>
          </h1>
          <div className="relative mb-6 overflow-hidden rounded-md border border-cyan-500 bg-gray-900 p-4">
            <div className="absolute inset-0 opacity-10 [background:repeating-linear-gradient(135deg,#06b6d4,#06b6d4_10px,transparent_10px,transparent_20px)]"></div>
            <div className="relative z-10 font-mono text-5xl font-bold text-cyan-400 tabular-nums">
              {counter}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="group flex h-14 items-center justify-center gap-2 rounded-md border border-cyan-500 bg-gray-900 text-cyan-400 transition-all hover:bg-cyan-900/20 cursor-pointer"
            onClick={() => dispatch(decrement())}
          >
            <ChevronDown className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="font-mono text-lg uppercase">Decrease</span>
          </button>

          <button
            className="group flex h-14 items-center justify-center gap-2 rounded-md border border-cyan-500 bg-gray-900 text-cyan-400 transition-all hover:bg-cyan-900/20 cursor-pointer"
            onClick={() => dispatch(increment())}
          >
            <ChevronUp className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="font-mono text-lg uppercase">Increase</span>
          </button>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-xs text-cyan-400">
              INCREMENT BY: {incrementBy}
            </span>
            <span className="font-mono text-xs text-purple-400">
              {incrementBy}
            </span>
          </div>

          <div className="relative mb-4 h-2 w-full rounded-full bg-gray-800">
            <div className="absolute inset-0 overflow-hidden rounded-full">
              <div className="h-full w-full bg-gradient-to-r from-cyan-500 to-purple-500 opacity-20"></div>
            </div>
            <input
              type="range"
              min="1"
              max="100"
              value={incrementBy}
              onChange={(e) => setIncrementBy(Number.parseInt(e.target.value))}
              className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent"
              style={{
                WebkitAppearance: 'none',
                appearance: 'none',
              }}
            />
            <style jsx>{`
              input[type='range']::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #06b6d4;
                box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
                cursor: pointer;
              }
              input[type='range']::-moz-range-thumb {
                width: 16px;
                height: 16px;
                border-radius: 50%;
                background: #06b6d4;
                box-shadow: 0 0 10px rgba(6, 182, 212, 0.7);
                cursor: pointer;
              }
            `}</style>
          </div>

          <button
            className="group flex w-full h-12 items-center justify-center gap-2 rounded-md border border-purple-500 bg-gray-900 text-purple-400 transition-all hover:bg-purple-900/20 cursor-pointer"
            onClick={() => dispatch(incrementByAmount(incrementBy))}
          >
            <Plus className="h-5 w-5 transition-all group-hover:scale-110" />
            <span className="font-mono text-lg uppercase">
              Add {incrementBy}
            </span>
          </button>
        </div>

        <div className="mt-6 border-t border-gray-800 pt-4">
          <div className="flex items-center justify-between">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <div className="font-mono text-xs text-cyan-400 opacity-70">
              v2.0.0
            </div>
            <div className="h-1 w-16 bg-gradient-to-l from-purple-500 to-transparent"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
