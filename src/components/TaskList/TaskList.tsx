import styles from './TaskList.module.scss'

export default function TaskList() {
  return (
    <>
      <h2 className={styles.title}>Hoàn thành</h2>
      <div className={styles.task}>
        <input type='checkbox' />
        <span className={styles.taskName}>Học bài</span>
        <div className={styles.taskActions}>
          <button className={styles.taskBtn}>Edit</button>
          <button className={styles.taskBtn}>Delete</button>
        </div>
      </div>
    </>
  )
}
