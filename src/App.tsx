import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { decrement, increment } from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();



  return (
    <div>
      <div className="flex gap-6">
        <button
          className="border-2 border-green-500 rounded-md px-2 py-3"
          onClick={()=> dispatch(increment())}
        >
          Increment
        </button>
        <div>{count}</div>
        <button className="border-2 border-red-500 rounded-md px-2 py-3" onClick={()=> dispatch(decrement())}>
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
