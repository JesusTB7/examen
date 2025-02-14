import './App.css';
import UsersList from './components/userList/UsersList';
import useUsers from './hooks/useUsers';

function App() {
  const {users} = useUsers();

  console.log(users);
  return (
    <div className="App">
      <header className="App-header">
        <UsersList users={users}/>
      </header>
    </div>
  );
}

export default App;