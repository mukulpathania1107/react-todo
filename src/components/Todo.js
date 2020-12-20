import './Todo.css';

const Todo = ({ todo, todos, setTodos }) => {
    const deleteHandler = () => {
        setTodos(todos.filter(cur => cur.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map(cur => {
            if (cur.id === todo.id) {
                return { ...cur, completed: !cur.completed };
            }
            return cur;
        }));
    }

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;