import { Todo } from '../../@types/todo.type'
import { Task } from './Task'
import styles from './TaskList.module.scss'

interface ITaskListProps {
  doneTaskList?: boolean
  todo?: Todo[]
  handleDoneTask: (id: string, done: boolean) => void
  startEditTodo: (id: string) => void
  deleteTodo: (id: string) => void
}

export default function TaskList(props: ITaskListProps) {
  const { doneTaskList, todo, handleDoneTask, startEditTodo, deleteTodo } =
    props
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>
        {!doneTaskList ? 'Hoàn thành' : 'Chưa hoàn thành'}
      </h2>
      {todo?.map((item) => (
        <Task
          handleDoneTask={handleDoneTask}
          todo={item}
          key={item.id}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}
