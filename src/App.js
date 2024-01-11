import './App.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


function App() {
  const [role, setRole ] = useState('dev');
  const [notify,] = useState('Update');
  const [employes, setEmployees] = useState(
    [

      {
        id: 1,
        name: 'Cale',
        role: 'Manager',
        img:"https://images.pexels.com/photos/2743754/pexels-photo-2743754.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id: 2,
        name: 'Alfred',
        role: 'Secretary',
        img: 'https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id:3,
        name: 'Stella',
        role: 'HR',
        img: "https://images.pexels.com/photos/1727273/pexels-photo-1727273.jpeg?auto=compress&cs=tinysrgb&w=600"
      },
      {
        id:4,
        name: 'Nora',
        role: 'Secretary',
        img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id:5,
        name: 'Kunle',
        role: 'Product manager',
        img: 'https://images.pexels.com/photos/2586823/pexels-photo-2586823.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
      {
        id:6,
        name: 'James',
        role: 'Designer',
        img: 'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600'
      },
    ]
  );
  function updateEmployee(id, newName, newRole) {
  const updatedEmployees = employes.map((employee) => {
    if (id === employee.id) {
      return { ...employee, name: newName, role: newRole };
    }
    return employee;
  });

  setEmployees(updatedEmployees);
}


  const employeesExist = true; // changed variable name for clarity

  return (
    <div className="App">
       <h1 className="text-3xl font-bold mb-4 flex items-center justify-center">Timi Employees</h1>
      {employeesExist ? (
        <>
          <input
            type="text"
            onChange={(e) => {
              console.log(e.target.value);
              setRole(e.target.value);
            }}
          />
          <div className="flex flex-wrap justify-center">
            {employes.map((employes) => {
              return(
              <Employee
              key={employes.id}
              id={employes.id}
                name={employes.name}
                role={employes.role}
                img={employes.img}
                updateEmployee={updateEmployee}

              />
              );


            })}

          </div>
        </>
      ) : (
        <p>No employees to display</p>
      )}
    </div>
  );
}

export default App;
