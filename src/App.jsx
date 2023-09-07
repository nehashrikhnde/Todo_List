import {useDispatch} from "react-redux";
import AddTodo from "./assets/component/AddTodo/AddTodo"
import TodoList from "./assets/component/TodoList/TodoList"
import {bindActionCreators} from "redux";
import todoReducer,{addTodo,editTodo,deleteTodo,todoFinished} from "./slices/todoSlice"

function App() {
const dispatch =useDispatch ();
const actions = bindActionCreators({addTodo,deleteTodo,editTodo,todoFinished},dispatch);
  return (
    <>  
      <AddTodo addTodo={actions.addTodo}/>
      <TodoList  deleteTodo={actions.deleteTodo} edit={actions.editTodo} TodoFinished ={actions.FinishedTodo}/>
</>
  )
}

export default App;
