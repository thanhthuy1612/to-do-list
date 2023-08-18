import { useState } from 'react'
import styles from './TaskInput.module.scss'
import { Todo } from '../../@types/todo.type'

interface ITaskInputProps {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishEditTodo: () => void
}

export default function TaskInput(props: ITaskInputProps) {
  const [input, setInput] = useState<string>('')
  const { addTodo, currentTodo, editTodo, finishEditTodo } = props
  const handleClick = (e: any) => {
    e.preventDefault()
    currentTodo ? finishEditTodo() : addTodo(input)
    setInput('')
  }
  const handleChange = (e: any) => {
    currentTodo ? editTodo(e.target.value) : setInput(e.target.value)
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form} onSubmit={handleClick}>
        <input
          type='text'
          value={currentTodo ? currentTodo.name : input}
          placeholder='Caption goes here'
          onChange={handleChange}
        />
        <button type='submit' className={styles.submit}>
          {currentTodo ? '...' : '+'}
        </button>
        {currentTodo && (
          <button className={styles.submit} onClick={() => finishEditTodo()}>
            X
          </button>
        )}
      </form>
    </div>
  )
}
