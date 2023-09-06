import { Trash } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'
import { useEffect, useState } from 'react'

interface TaskType {
    id: string
    isChecked: boolean
    task: string
}

interface TasksProps {
    tasks: string[]
    onDeleteTask: (task: string) => void
}

export function Tasks({ tasks, onDeleteTask }: TasksProps) {
    const [taskStates, setTaskStates] = useState<TaskType[]>([])

    function handleCheckTask(taskId: string) {
        const updatedTaskStates = taskStates.map((task) =>
          task.id === taskId ? { ...task, isChecked: !task.isChecked } : task
        )
        setTaskStates(updatedTaskStates)
    }

    function handleDeleteTask(task: string) {
        onDeleteTask(task)
    }

    useEffect(() => {
        const updatedTaskStates = tasks.map((task) => ({ id: task, isChecked: false, task }))
        setTaskStates(updatedTaskStates)
    }, [tasks])

    return (
        <div className={styles.tasksContainer}>
            <header>
                <div className={styles.createdTasks}>
                    Tarefas criadas
                    <div className={styles.counter}>
                        0
                    </div>
                </div>
                <div className={styles.concludedTasks}>
                    Concluídas
                    <div className={styles.counter}>
                        0
                    </div>
                </div>
            </header>
            {tasks.length === 0 ? (
                <div className={styles.empty}>
                    <img src={clipboard} alt="Ícone de clipboard" />
                    <div>
                        <p className={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</p>
                        Crie tarefas e organize seus itens a fazer
                    </div>
                </div>
            ) : (
                tasks.map((task) => {
                    const taskState = taskStates.find((t) => t.task === task)

                    return (
                        <div key={task} className={taskState?.isChecked ? styles.taskConcluded : styles.taskContent}>
                            <div className={styles.checkboxContainer}>
                                <input type="checkbox" checked={taskState?.isChecked} readOnly />
                                <span className={styles.checkmark} onClick={() => handleCheckTask(task)} />
                            </div>
                            <div className={styles.task}>
                                {task}
                                <button title='Deletar tarefa' onClick={() => handleDeleteTask(task)}>
                                    <Trash size={20} />
                                </button>
                            </div>
                        </div>
                    )
                })
            )}
        </div>
    )
}