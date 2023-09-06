import { Trash } from '@phosphor-icons/react'
import styles from './Tasks.module.css'

// import clipboard from '../assets/clipboard.svg'

export function Tasks() {
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
            {/* <div className={styles.empty}>
                <img src={clipboard} alt="Ícone de clipboard" />
                <div>
                    <p className={styles.emptyTitle}>Você ainda não tem tarefas cadastradas</p>
                    Crie tarefas e organize seus itens a fazer
                </div>
            </div> */}
            <div className={styles.task}>
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" />
                    <span className={styles.checkmark} />
                </div>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <button>
                    <Trash size={20} />
                </button>
            </div>
            <div className={styles.taskConcluded}>
                <div className={styles.checkboxContainer}>
                    <input type="checkbox" checked />
                    <span className={styles.checkmark} />
                </div>
                Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
                <button>
                    <Trash size={20} />
                </button>
            </div>
        </div>
    )
}