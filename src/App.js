import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from './redux/weatherSlice';
import CityForm from './components/CityForm';
import Spinner from './components/Spinner'
import FiveDaysForecast from './components/FiveDaysForecast';
import DetailsCard from './components/DetailsCard';

function App() {
  
  const { forecast, stats, city, isLoading } = useSelector((state) => state.weather)
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchData(e.target.city.value))
    e.target.city.value = ''
  }

  return (
    <>
      <CityForm handleSubmit={handleSubmit} />
      {isLoading ?
        <Spinner />
        :
        (
          <div className='m-3 card-panel'>
            {!!Object.keys(stats).length &&
              <DetailsCard stats={stats} forecast={forecast} city={city} />
            }
            <FiveDaysForecast forecast={forecast} />
          </div>
        )
      }
    </>
  );
}

export default App;
