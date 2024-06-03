import React, { useEffect } from 'react'
import { CardContainer, HeaderText, Hr } from '../cardcss'
import { useSelector, useDispatch } from 'react-redux'
import { fetchEurope } from '../../redux/slice/europeSlice'
import Europe from './'
import { nanoid } from '@reduxjs/toolkit'
function EuropeCityList() {
    const { europeCity } = useSelector(state => state.europecity)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchEurope())
    }, [])
    return (
        <div>
            <HeaderText>Daily EUROPE Weather</HeaderText>
            <Hr />
            <CardContainer>
                {europeCity.map(city => (
                    <Europe key={nanoid()} city={city} />
                ))}
            </CardContainer>
        </div>

    )
}

export default EuropeCityList