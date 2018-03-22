# React-Todo
React CSR Todo List

No special instruction.

npm install
npm start 

to run the react app.

About the app:

1.User can can add a TODO to the list.

2.User can add and delete one or more sub-TODOs to a top-level TODO. 

3.If a sub-TODO exist and are all completed, then the parent TODO will be completed.

4.If a parent TODO completed, then all sub-TODOs are also completed.

5.User can see all the TODOs on the list in an overview.

6.User can see more detail about the TODO by click Todo, an overlay modal will pop.

7.User can delete a TODO, all sub-Todos will be deleted as well.
  Delete all sub-Todos will not delete a Parent Todo.


8.User can mark a TODO as completed.
  Mark a parent Todo as completed will mark all sub-Todos.
  Mark all sub-Todos as completed will mark parent Todo as well. 

9.If today's date is past the TODO's deadline, date text will be red. Otherwise, it will be green.
  Subtodo deadline can't pass parent Todo's deadline. 

10.A TODO consists of a task name, a deadline date, a completed flag, and an optional "more details" field that allows for more 
  details to be given.


Thoughts:

1. Todo data will be stored in Redux store, refresh will initialize the Redux store. Sync the Redux store to localStorage on every change can prevent the data lose and Redux store can get initial state from localStorage on refresh. 

2. Current input filter is based on HTML and a little JS, if the required fields are empty or filled in with spaces, submit method will return nothing. Error message can be implemented easily by tracking user input in onChange functions. If user input is invalid, set error in state to render error message, else clear the error state. 

3. Very basic custom CSS, can be improved with animation and more accurate calculation.


