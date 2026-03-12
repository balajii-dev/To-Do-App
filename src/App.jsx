import { useState } from 'react';

function App() {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    const trimmed = taskText.trim();
    if (!trimmed) return;

    const newTask = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
      text: trimmed,
    };

    setTasks((prev) => [...prev, newTask]);
    setTaskText('');
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="w-full max-w-xl">
        <div className="bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-zinc-800/80 rounded-3xl shadow-[0_0_80px_rgba(255,215,0,0.2)] p-8 sm:p-10 flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-semibold tracking-wide text-[#FFD700] mb-6 text-center">
            Add Your Tasks
          </h1>

          <div className="w-full flex flex-col sm:flex-row gap-3 mb-6">
            <input
              type="text"
              value={taskText}
              onChange={(e) => setTaskText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What do you want to finish today?"
              className="flex-1 rounded-full bg-zinc-900/80 border border-zinc-700/80 text-zinc-100 placeholder-zinc-500 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent transition"
            />
            <button
              type="button"
              onClick={handleAddTask}
              className="rounded-lg px-6 py-3 bg-[#FFD700] text-black font-semibold tracking-wide shadow-md hover:bg-yellow-400 hover:shadow-[0_0_25px_rgba(255,215,0,0.6)] active:scale-95 transition transform"
            >
              Add
            </button>
          </div>

          <div className="w-full mt-2">
            {tasks.length === 0 ? (
              <div className="text-center text-zinc-500 text-sm border border-dashed border-zinc-700/70 rounded-2xl py-6 px-4 bg-zinc-900/40">
                No tasks yet!
              </div>
            ) : (
              <div className="space-y-3">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between gap-3 bg-zinc-900/80 border border-zinc-800/90 rounded-2xl px-4 py-3 shadow-sm hover:border-[#FFD700]/60 transition"
                  >
                    <span className="text-zinc-100 text-sm sm:text-base">
                      {task.text}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleDeleteTask(task.id)}
                      className="text-xs sm:text-sm rounded-full px-3 py-1.5 border border-red-500/70 text-red-400 hover:bg-red-500 hover:text-black hover:border-red-400 transition font-medium"
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
