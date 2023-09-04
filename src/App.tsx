import { Header } from "./components/Header";

import styles from './App.module.css'

import './global.css'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function App() {
  const [tasks, setTasks] = useState([''])
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

  const isNewTaskEmpty = newTaskText.length === 0

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
            <button type="submit" disabled={isNewTaskEmpty}>
              Criar
            </button>
          </form>
        </main>
      </div>
    </div>
  )
}