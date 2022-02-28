const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div
            className={`Entry ${task.reminder && 'reminder'}`}
            onDoubleClick={() => onToggle(task.id)}
        >
            <h3></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
