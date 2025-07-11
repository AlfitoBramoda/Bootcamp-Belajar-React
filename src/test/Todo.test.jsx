// SimpleTodoList.test.jsx - Tests for our todo list
import { render, screen, fireEvent } from '@testing-library/react';
import { expect, test, describe } from 'vitest';
import SimpleTodoList from '../pages/SimpleTodoListPage';

describe('SimpleTodoList', () => {

    test('renders the todo list title', () => {
        // Render our component
        render(<SimpleTodoList />);
        
        // Check if the title appears on screen
        expect(screen.getByText('My Todo List')).toBeInTheDocument();
    });

    test('can add a new todo', () => {
        render(<SimpleTodoList />);
        
        // Type in the input
        fireEvent.change(screen.getByPlaceholderText('Enter a new todo...'), { target: { value: 'Buy groceries' } });
        
        // Click the add button
        fireEvent.click(screen.getByText('Add Todo'));
        
        // Check if the todo appears in the list
        expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    });

    test('can delete a todo', () => {
        render(<SimpleTodoList />);
        
        // First, add a todo
        const input = screen.getByPlaceholderText('Enter a new todo...');
        const addButton = screen.getByText('Add Todo');
        
        fireEvent.change(input, { target: { value: 'Test todo' } });
        fireEvent.click(addButton);
        
        // Now delete it
        const deleteButton = screen.getByText('Delete');
        fireEvent.click(deleteButton);
        
        // Check that the todo is gone
        expect(screen.queryByText('Test todo')).not.toBeInTheDocument();
    });

    test('input clears after adding todo', () => {
        render(<SimpleTodoList />);
        
        const input = screen.getByPlaceholderText('Enter a new todo...');
        const addButton = screen.getByText('Add Todo');
        
        fireEvent.change(input, { target: { value: 'New todo' } });
        fireEvent.click(addButton);
        
        // Check that input is now empty
        expect(input.value).toBe('');
    });
});