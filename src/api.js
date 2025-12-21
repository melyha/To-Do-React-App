//JSONPlaceholder- Fake API for Testing - AI genearted
const BASE_URL = 'https://jsonplaceholder.typicode.com';

export function getAllTodos(setterCallback) {
    fetch(`${BASE_URL}/todos?_limit=10`)
    .then(resp => resp.json())
    .then(data => {
        // Transform API data to match our structure
        const transformedTodos = data.map(todo => ({
            id: todo.id,
            text: todo.title,
            completed: todo.completed
        }));
        setterCallback(transformedTodos);
    })
    .catch(err => {
        console.error('Error fetching todos:', err);
        setterCallback([]);
    });
}

export function createTodo(newTodo, setterCallback) {
    fetch(`${BASE_URL}/todos`, {
        method: 'POST',
        body: JSON.stringify({
            title: newTodo.text,
            completed: newTodo.completed,
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(resp => resp.json())
    .then(data => {
        const transformedTodo = {
            id: data.id,
            text: data.title,
            completed: data.completed
        };
        setterCallback(transformedTodo);
    })
    .catch(err => {
        console.error('Error creating todo:', err);
    });
}

export function updateTodo(id, updates, setterCallback) {
    fetch(`${BASE_URL}/todos/${id}`, {
        method: 'PATCH',
        body: JSON.stringify({
            title: updates.text,
            completed: updates.completed
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(resp => resp.json())
    .then(data => setterCallback(data))
    .catch(err => {
        console.error('Error updating todo:', err);
    });
}

export function deleteTodo(id, setterCallback) {
    fetch(`${BASE_URL}/todos/${id}`, {
        method: 'DELETE'
    })
    .then(() => setterCallback(id))
    .catch(err => {
        console.error('Error deleting todo:', err);
    });
}
