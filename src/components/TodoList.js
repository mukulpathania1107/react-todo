import Todo from './Todo';
import './TodoList.css';

const TodoList = ({ todos, setTodos, status, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo todos={todos} setTodos={setTodos} todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;