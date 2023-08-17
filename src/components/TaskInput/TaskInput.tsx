import styles from './TaskInput.module.scss'

export default function TaskInput() {
  return (
    <>
      <h1 className={styles.title}>To do list typescript</h1>
      <form className={styles.form}>
        <input type='text' placeholder='Caption goes here' />
        <button type='submit' className={styles.submit}>
          +
        </button>
      </form>
    </>
  )
}
