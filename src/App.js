import { faPlaceOfWorship } from "@fortawesome/free-solid-svg-icons";
import Header from "./Header"
import Card from "./Card"
import data from "./data";

function App() {
  const places = data.map(place => {
  return (
      <Card 
        key={place.id}
        place={place}
      />
    )
  })
  return (
    <div className="container">
      <Header />
      {places}
    </div>
  )
}

export default App;
