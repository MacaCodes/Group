import Alert from './Components/alert'

function App() {

  const onClick = () => {
    console.log("clicked")
  }

  return <div>
    <Alert childrens='ok' onClick={onClick}>
      Now it work
    </Alert>
  </div>

}


export default App;
  