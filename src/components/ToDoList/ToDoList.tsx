import { useState } from 'react'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import styles from './ToDoList.module.scss'
import { Todo } from '../../@types/todo.type'

export default function ToDoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((pre) => [...pre, todo])
  }
  const handleDoneTask = (id: string, done: boolean) => {
    setTodos((pre) => {
      return pre.map((todo) => {
        if (todo.id === id) {
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    findedTodo && setCurrentTodo(findedTodo)
  }
  const editTodo = (name: string) => {
    setCurrentTodo((pre) => {
      if (pre) return { ...pre, name }
      return null
    })
  }
  const finishEditTodo = () => {
    currentTodo &&
      setTodos((pre) => {
        return pre.map((todo) => {
          if (todo.id === currentTodo?.id) {
            return currentTodo
          }
          return todo
        })
      })
    setCurrentTodo(null)
  }
  const deleteTodo = (id: string) => {
    currentTodo && setCurrentTodo(null)
    setTodos((pre) => {
      const findIndexTodo = pre.findIndex((todo) => todo.id === id)
      if (findIndexTodo) {
        const result = structuredClone(pre)
        result.splice(findIndexTodo, 1)
        return result
      }
      return pre
    })
  }
  return (
    <div className={styles.todoList}>
      <div className={styles.todoListContainter}>
        <TaskInput
          addTodo={addTodo}
          currentTodo={currentTodo}
          editTodo={editTodo}
          finishEditTodo={finishEditTodo}
        />
        <TaskList
          doneTaskList
          todo={todos.filter((todo) => !todo.done)}
          handleDoneTask={handleDoneTask}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
        <TaskList
          todo={todos.filter((todo) => todo.done)}
          handleDoneTask={handleDoneTask}
          startEditTodo={startEditTodo}
          deleteTodo={deleteTodo}
        />
      </div>
    </div>
  )
}
