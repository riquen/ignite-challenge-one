import { Trash } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

import clipboard from '../assets/clipboard.svg'

export interface TaskType {
    isChecked: boolean
    task: string
}

interface TasksProps {
    tasks: TaskType[]
    onCheckTask: (task: string) => void
    onDeleteTask: (task: string) => void
}

export function Tasks({ tasks, onCheckTask, onDeleteTask }: TasksProps) {
    const concludedTasks = tasks.filter(({ isChecked }) => isChecked)

    function handleCheckTask(task: string) {
        onCheckTask(task)
    }

    function handleDeleteTask(task: string) {
        onDeleteTask(task)
    }

    return (
        <div className={styles.tasksContainer}>
            <header>
                <div className={styles.createdTasks}>
                    Tarefas criadas
                    <div className={styles.counter}>
                        {tasks.length}
                    </div>
                </div>
                <div className={styles.concludedTasks}>
                    Concluídas
                    <div className={styles.counter}>
                        {concludedTasks.length} de {tasks.length}
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
                tasks.map(({ isChecked, task }) => {
                    return (
                        <div key={task} className={isChecked ? styles.taskConcluded : styles.taskContent}>
                            <div className={styles.checkboxContainer}>
                                <input type="checkbox" checked={isChecked} readOnly />
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