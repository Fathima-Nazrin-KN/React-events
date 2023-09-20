
import './App.css';

function App() {
  const name = [
    "arun",
  "madhav",
  "john",
  "abu"
]

const users =[
  {name:"Arthur",age:23},
  {name:"RAvi",age:19},
  {name:"abu",age:undefined}
]
  return (
   <div >
    {  users.map((user)=><>
      <h1>{user.name}</h1>
      {user.age >=18 &&
      <h2>Adult</h2>}
     

      </>)}
     
     
      
    </div>
  );
}

export default App;
