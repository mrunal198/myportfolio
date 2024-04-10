import Hero  from './components/hero';
function App() {
  //const nav ={skills, Projects, Contact}
  return (
    <div className="App">
     {/* <Router> */}
      <div>
        <Hero />
        {/* <Switch>
          <Route path="/" exact component={hero} />
        </Switch> */}
      </div>
    {/* </Router> */}
      
    </div>
  );
}

export default App;
