import {Provider} from 'react-redux';
import store from './store';

import Buttons from "./components/Buttons";
import ActionButtons from "./components/ActionButtons";
import Display from "./components/Display";
import Result from "./components/Result";

import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <section className="container">
          <Display />
          <div className="button-container-number">
            <Buttons value={0}/>
            <Buttons value={1}/>
            <Buttons value={2}/>
            <Buttons value={3}/>
            <Buttons value={4}/>
            <Buttons value={5}/>
            <Buttons value={6}/>
            <Buttons value={7}/>
            <Buttons value={8}/>
            <Buttons value={9}/>
          </div>
          <div className="button-container-actions">
            <ActionButtons operator={'+'}/>
            <ActionButtons operator={'-'}/>
            <ActionButtons operator={'*'}/>
            <ActionButtons operator={'/'}/>
            <ActionButtons operator={'DEL'}/>
          </div>
          <Result />
        </section>
      </div>
    </Provider>
  );
}

export default App;
