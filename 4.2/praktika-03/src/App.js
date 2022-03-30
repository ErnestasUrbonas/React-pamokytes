import logo from './logo.svg';
import './App.css';
import LessText from './components/LessText';

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 Border' >
          <LessText
            text={'Focused, hard work is the real key to success. Keep your eyes on the goal, and just keep taking the next step towards completing it.'}
            maxLenght={35}
          />
          <LessText
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sint enim quo repellat quos nulla voluptate cum cumque et? Libero, harum accusantium laborum vitae tempora hic nemo molestias modi cupiditate?'}
            maxLenght={35} />
        </div>
      </div>

    </div>
  );
}

export default App;
