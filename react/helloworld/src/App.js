import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='back'>
      <Earth />
      <Earth />
      <Earth />
    </div>
  );
}
const Earth = () => {
  return (
    <div className='earth'>
      <h2>helloworld</h2>
      <div className='logo-container'>
        <img
          className='logo'
          src='https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWFydGh8ZW58MHx8MHx8fDA%3D'
        />
        <img />
      </div>
      <p>this is my first react code</p>
    </div>
  );
};
export default App;
