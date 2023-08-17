import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './ToDoList.module.scss'

export default function ToDoList() {
  return (
    <>
      <h1 className={styles.title}>To Do List</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}
