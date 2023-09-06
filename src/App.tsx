import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";
import { Tasks } from "./components/Tasks";

export function App() {
  const [tasks, setTasks] = useState<string[]>([])
  const [newTaskText, setNewTaskText] = useState('')

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([...tasks, newTaskText])
    setNewTaskText('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task !== taskToDelete)
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <main>
          <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
            <input
              type="text"
              name="to-do"
              placeholder="Adicione uma nova tarefa"
              value={newTaskText}
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type="submit">
              Criar <PlusCircle size={16} />
            </button>
          </form>
          <Tasks
            tasks={tasks}
            onDeleteTask={deleteTask}
          />
        </main>
      </div>
    </div>
  )
}