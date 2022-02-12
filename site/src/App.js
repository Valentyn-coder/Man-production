import React, {useState} from 'react';
import './App.css';
import Card from './components/Card'
import Devices from './components/Devices'
import Header from './components/Header'
import Bottom from './components/Bottom';

function App() {
  
  const [tasks, setTasks] = useState([
    {
      title: "Home",
      co2: "12",
      voc: "34",
      temp: "45",
      imageUrl: "https://images.pexels.com/photos/2950003/pexels-photo-2950003.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      key: 1
    },
    {
      title: "Work",
      co2: "14",
      voc: "32",
      temp: "45",
      imageUrl: "https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      key: 2
    },
    {
      title: "Lab",
      co2: "17",
      voc: "32",
      temp: "67",
      imageUrl: "https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      key: 3
    },
    {
      title: "Outdoors",
      co2: "17",
      voc: "32",
      temp: "67",
      imageUrl: "https://images.pexels.com/photos/130987/pexels-photo-130987.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      key: 3
    }
    
  ])

  return (
    <div className='App'>
      <Header/>
      <Devices tasks={tasks}/>
      <Bottom/>
    </div>
    
  );
}

export default App;
