import { useState } from "react";
import api from "../services/api";
import './TaskForm.css';

function TaskForm({ onTaskCreated }) {
    const [title, setTitle] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        try {
            const response = await api.post('/tasks', { title });
            onTaskCreated(response.data);
            setTitle('');
        } catch (error) {
            console.error('Erro ao criar a tarefa:', error);
        }
    };
    return (
        <form onSubmit={handleSubmit} className="task-form">
            <input
                type="text"
                placeholder="Digite uma tarefa..."
                value={titulo}
                onChange={(e) => setTitle(e.target.value)}
                className="task-input"
            />
            <button type="submit" className="task-button">Adicionar tarefa</button>
        </form>
    );
}

export default TaskForm;