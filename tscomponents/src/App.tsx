import BAButton from './Components/BAButton';
import BACard from './Components/BACard';
import BATable from './Components/BATable';
import BASelect from './Components/BASelect';
import BAInput from './Components/BAInput';

import './App.css';

function App() {

  const arr = [
    {
      id: 1,
      name: "Abdullah",
      age: 20,
      institute: "SAIMS",
      isActive: true,
      category: "Human Being"
    },
    {
      id: 2,
      name: "Umair",
      age: 20,
      institute: "SAIMS",
      isActive: true,
      category: "Human Being"
    },
    {
      id: 3,
      name: "Sameer",
      age: 20,
      institute: "SAIMS",
      isActive: true,
      category: "Human Being"
    },
    {
      id: 4,
      name: "Usman",
      age: 20,
      institute: "SAIMS",
      isActive: true,
      category: "Human Being"
    },
    {
      id: 5,
      name: "Ali",
      age: 20,
      institute: "SAIMS",
      isActive: true,
      category: "Human Being"
    },
  ]

  return (
    <div className="App">
      <div>
      <h1>Button Components</h1>
        <BAButton 
        buttonClick={()=>{
          alert("Submitted Successfully");
        }}
        buttonVal= "Submit"
        />
      </div>

      <div>
      <h1>Card Components</h1>
        {
          arr.map((x,i)=>{
            return (
              <BACard
              id={x.id}
              userName={x.name}
              age={x.age}
              institute={x.institute}
              isActive={x.isActive}
              category={x.category}
              />
            )
          })
        }
      </div>

      <div>
      <h1>Table Components</h1>
      {
          arr.map((x,i)=>{
            return (
              <BATable
              id={x.id}
              userName={x.name}
              age={x.age}
              institute={x.institute}
              isActive={x.isActive}
              category={x.category}
              />
            )
          })
        }
      </div>

      <div>
      <h1>Select Components</h1>
        <BASelect
        label="Gender"
        options={[
          {
            value: "male",
            displayName: "Male"
          },
          {
            value: "female",
            displayName: "Female"
          },
          {
            value: "other",
            displayName: "Other"
          },
          {
            value: "transgender",
            displayName: "TransGender"
          },
        ]}
        />
      </div>

      <div>
        <h1>Input Components</h1>
        <BAInput
        type='text'
        placeholder='Enter Anything'
        />
      </div>
    </div>
  );
}

export default App;
