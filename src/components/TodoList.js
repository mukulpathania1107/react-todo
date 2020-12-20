import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, setTodos, status }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;