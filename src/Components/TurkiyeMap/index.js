import { Tooltip } from 'antd';
import React from 'react'
import { useDispatch } from 'react-redux';
import TurkeyMap from 'turkey-map-react'
import { fetchCity } from '../../redux/slice/turkiyeSlice';

const renderCity = (cityComponent, cityData) => (
  <Tooltip title={cityData.name} key={cityData.id}>
    {cityComponent}
  </Tooltip>
);

const TurkiyeMap = () => {
  const dispatch = useDispatch()
  return (
    <TurkeyMap onClick={({ plateNumber }) => dispatch(fetchCity(plateNumber))} cityWrapper={renderCity} style={{ stroke: 'red' }} customStyle={{ idleColor: "#7f8fa6", hoverColor: "#8c7ae6" }} ></TurkeyMap>
  )
}

export default TurkiyeMap

