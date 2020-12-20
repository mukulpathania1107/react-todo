import './Form.css';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    const inputTextHandler = e => {
        setInputText(e.target.value);
    };

    const submitTodoHandler = e => {
        e.preventDefault();
        setTodos([...todos, { text: inputText, completed: false, id: Math.random() * 10000 }]);
        setInputText('');
    };

    return (
        <form>
            <input onChange={inputTextHandler} type="text" value={inputText} className="todo-input" />
            <button onClick={submitTodoHandler} type="submit" className="todo-button">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}


export default Form;