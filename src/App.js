import './App.css';
import Animal from './components/Animal';

function App() {
  const animals = [ { name: 'Lion', isMammal: true }, 
                    { name: 'Snake', isMammal: false },
                    { name: 'Dolphin', isMammal: true },
                    { name: 'Crocodile', isMammal: false }, 
                    { name: 'Elephant', isMammal: true }, 
                    { name: 'Shark', isMammal: false },
                    { name: 'Gorilla', isMammal: true },
                    { name: 'Parrot', isMammal: false },
                    { name: 'Kangaroo', isMammal: true },
                    { name: 'Tiger', isMammal: true }, 
                    { name: 'Penguin', isMammal: false }, 
                    { name: 'Hippopotamus', isMammal: true }, 
                    // Add even more animals as needed 
                  ];
  return (
    <div className="App">
      {
        animals.map((animal, key) => {
          return <Animal name={animal.name} isMammal={(animal.isMammal === true) ?   <div className="mammal">{'Is Мammal'}</div>: <div className="notmammal">Not Mammal</div>} />
        })
      }
    </div>
  );
}

export default App;
