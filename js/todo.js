/// ToDo List:
/// Starts with a prompt, then select action
/// "new" - Add a Todo
/// "list" - List all Todo's
/// "delete" - Remove Specific Todo
/// "quit" - Quit App

let input = prompt("What would you like to do?");
const todos = ['Bike 13k'];

while (input !== 'quit' && input !== 'q') {
    if(input === 'list') {
        console.log('*****************');
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('*****************');
    } else if (input === 'new') {
        const newTodo = prompt('Ok, what do you have todo?');
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`);
    } else if (input === 'delete') {
        const index = prompt('Enter the number you would like to delete.');
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    }
    input = prompt("What would you like to do?");
}
console.log("OK, you have quit the App.");