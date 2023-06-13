
import './App.css';
import Form from './components/form/form';

function App() {
  return (
    <div className="app">
      <h2 className='text-center'>Personal Information</h2>
      <Form/>
      <button className='btn alert alert-primary'>submit</button>
    </div>
  );
}

export default App;
