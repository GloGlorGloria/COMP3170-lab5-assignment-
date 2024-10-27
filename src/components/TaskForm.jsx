export default function TaskForm ({handleSubmit,task,setTask}) {
    console.log(task.taskName);
    return(
        <form onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                className="input-container" 
                placeholder="new task ..."
                value={task.taskName}
                onChange={(e) => setTask({...task, taskName:e.target.value, isDone:false,})}
            />
            <button type="submit" className="save-button">Save</button>
        </form>
    );
}
