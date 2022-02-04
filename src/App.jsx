import './App.css';
import contactsJSON from "./contacts.json";
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(5, 10));

  const sortName = () => {
    const sortedName = [...contacts].sort(function (a, b) {
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedName);
  }

  return <div className="App">
    <h2 className='header'>IronContacts</h2>
  
    <table className='contacts-table'>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won an Oscar</th>
      <th>Won an Emmy</th>
      
      {contacts.map((celebrity) => {
        return (
          <tr>
            <td>
              <img src={celebrity.pictureUrl} alt='profile_picture' width='70px' />
            </td>
            <td>{celebrity.name}</td>
            <td>{celebrity.popularity.toFixed(2)}</td>
            <td>{celebrity.wonOscar && <p>🏆</p>}</td>
            <td>{celebrity.wonEmmy && <p>🌟</p>}</td>
          </tr>
        )
      })}
    </table>
  </div>
}

export default App;
