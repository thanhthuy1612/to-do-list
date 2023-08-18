import { Todo } from '../../@types/todo.type'
import styles from './TaskList.module.scss'

interface ITaskProps {
  todo: Todo
  handleDoneTask: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export function Task(props: ITaskProps) {
  const { todo, handleDoneTask, startEditTodo, deleteTodo } = props
  const handleChange = (id: string) => (e: any) => {
    handleDoneTask(id, e.target.checked)
  }
  return (
    <div className={styles.task}>
      <input
        className={styles.taskCheckbox}
        type='checkbox'
        onChange={handleChange(todo.id as string)}
        checked={todo?.done}
      />
      <span
        className={
          !todo?.done
            ? styles.taskName
            : `${styles.taskName} ${styles.doneTaskList}`
        }
      >
        {todo?.name}
      </span>
      <div className={styles.taskActions}>
        <button
          className={styles.taskBtn}
          onClick={() => startEditTodo(todo.id as string)}
        >
          Edit
        </button>
        <button
          className={styles.taskBtn}
          onClick={() => deleteTodo(todo.id as string)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
