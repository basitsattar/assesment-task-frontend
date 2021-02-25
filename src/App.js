import { useState } from 'react';
import './App.css';
import CountrySelect from './components/autoComplete';
import CountriesList from './components/countriesList';
import { getAvailablePhoneNumbers } from './services';
function App() {


  const [numbers, setNumbers] = useState([]);
  const [countryCode, setCountryCode] = useState(null);
  const [loading, setLoading] = useState(false);



  const getPhoneNumbers = async (code) => {
    setLoading(true)
    const phoneNumbers = await getAvailablePhoneNumbers(code);
    setNumbers(phoneNumbers);
    setLoading(false)
  }
  const handleCountryCode = (code) => {
    setCountryCode(code)
    getPhoneNumbers(code)
  }
  console.log("numbers", numbers)
  return (
    <div className="App">
      <header className="App-header mt-4 pb-4">
        <div className="form-inline" action="/action_page.php">
          <div className="form-group">
            <CountrySelect setCountryCode={handleCountryCode} />
          </div>

        </div>

        {numbers && numbers.length > 0 && !loading &&
          <CountriesList numbers={numbers} />
        }

        {!numbers && !loading && <h2 className="container text-muted">Numbers are not found</h2>}
        {countryCode && loading && <h4 className="container text-muted mt-4">Loading...</h4>}
      </header>
    </div>
  );
}

export default App;
