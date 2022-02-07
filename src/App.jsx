import './App.css';
import contactsJSON from "./contacts.json";
import { useState } from 'react';


function App() {
  const [contacts, setContacts] = useState(contactsJSON.slice(5, 10));

  const randomContacts = () => {
    const randomIndex = (Math.floor(Math.random() * (contactsJSON.length - 1)));
    console.log('randomIndex', randomIndex);
    const randomCelebrity = contactsJSON[randomIndex];
    setContacts(contacts.concat(randomCelebrity))
  }

  const sortName = () => {
    const sortedName = [...contacts].sort(function (a, b) {
      if (b.name > a.name) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedName);
  }

  const sortPopularity = () => {
    const sortedPopularity = [...contacts].sort(function (a, b) {
      if (b.popularity > a.popularity) {
        return -1;
      }
      return 0;
    });
    setContacts(sortedPopularity);
  }

  const deleteContact = (contactId) => {
    const filteredContact = contacts.filter((contact) => {
      return contact.id !== contactId
    })
    setContacts(filteredContact);
  }

  return <div className="App">
    <h1 className='header'>IronContacts</h1>

    <button onClick={randomContacts}>
      Add Random Contact
    </button>
    <button onClick={sortName}>
      Sort by name
    </button>
    <button onClick={sortPopularity}>
      Sort by popularity
    </button>

    <div className='Table'>
      <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won an Oscar</th>
          <th>Won an Emmy</th>
        </thead>
        <tbody>
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
                
                <td><button onClick={() => deleteContact(celebrity.id)}>Delete</button></td>  
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>

  </div>
}

export default App;
