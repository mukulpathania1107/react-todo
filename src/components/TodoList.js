import Todo from './Todo';
// import './TodoList.css';

const TodoList = ({ todos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo todo={todo} key={todo.id} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;