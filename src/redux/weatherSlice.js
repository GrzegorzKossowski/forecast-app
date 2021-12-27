import { createSlice } from '@reduxjs/toolkit';
import { findMode, weekDays } from '../utils';

const initialState = {
  forecast: [],
  stats: {},
  city: null,
  isLoading: false,
  error: null
}

const weatherSlice = createSlice({
  name: 'weatherSlice',
  initialState,
  reducers: {
    setForecast: (state, { payload }) => {
      state.forecast = payload
    },
    setStats: (state, { payload }) => {
      state.stats = payload
    },
    setCity: (state, { payload }) => {
      state.city = payload
    },
    setLoading: (state, { payload }) => {
      state.isLoading = payload
    },
    setError: (state, { payload }) => {
      state.error = payload
    },

  }
})

export const fetchData = (city) => async (dispach) => {

  try {
    dispach(setLoading(true))
    const dataUrl = `${process.env.REACT_APP_API_URL}?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`
    const response = await fetch(
      dataUrl
    );
    if (response.ok) {
      const data = await response.json()
      const forecast = await data.list
        .filter(el => el.dt_txt.includes('09:00') || el.dt_txt.includes('15:00') || el.dt_txt.includes('00:00:00'))
        .map(el => {
          return {
            id: el.dt,
            day: weekDays[new Date(el.dt * 1000).getDay()],
            hour: el.dt_txt.slice(11, 16),
            temp: el.main.temp,
            humidity: el.main.humidity
          }
        })
      const cityName = await data.city.name
      const minTemp = Math.min(...forecast.map(el => el.temp))
      const maxTemp = Math.max(...forecast.map(el => el.temp))
      const allTemperatures = forecast.map(el => el.temp)
      const avgTemp = parseFloat((allTemperatures.reduce((a, c) => a + c, 0) / allTemperatures.length).toFixed(2));
      const normalizedTemperatures = allTemperatures.map(el => {
        const decimal = el % 1
        return decimal > 0.5 ? Math.ceil(el) : Math.floor(el)

      })
      const modeValues = findMode(normalizedTemperatures)

      dispach(setForecast(forecast))
      dispach(setStats({ minTemp, maxTemp, avgTemp, modeValues }))
      dispach(setCity(cityName))
      dispach(setLoading(false))

    }
  } catch (error) {
    // TODO: implement error handling
    console.log(error);
  }

}

const { actions, reducer } = weatherSlice
const { setForecast, setStats, setCity, setLoading, setError } = actions

export default reducer