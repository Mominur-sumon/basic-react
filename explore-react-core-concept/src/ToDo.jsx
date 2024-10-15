
// Conditoinal rendering with props
export default function ToDo({task, isDone}) {
  return (
    isDone ? <li>Task: {task} is done</li> : <li>Task: {task} is not done</li>
  )
}


