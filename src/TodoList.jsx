import './TodoList.css';
import { CheckCircle, RadioButtonUnchecked, Delete } from '@mui/icons-material';

// TodoList component that displays a list of todos
export function TodoList(props) {
    const { todos } = props;

    return (
        <div className="todo-list-container">
            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-item">
                        {todo.completed ? (
                            <CheckCircle className="todo-icon completed" />
                        ) : (
                            <RadioButtonUnchecked className="todo-icon" />
                        )}
                        <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                            {todo.text}
                        </span>
                    </li>
                ))}
            </ul>
            <button className="remove-completed-btn">
                 <Delete className="btn-icon" />
                Remove Completed Items
            </button>
        </div>
    );
}