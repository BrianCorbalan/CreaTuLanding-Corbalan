import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <>
      <div className='App'>        
        <div>
          <NavBar />
          <ItemListContainer props='Bienvenidos a Reiwa Style'/>
        </div>
      </div>

    </>
  )
}

export default App
