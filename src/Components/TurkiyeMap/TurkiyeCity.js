import moment from 'moment-timezone'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCity } from '../../redux/slice/turkiyeSlice'
import { CardContainer, Card, Tempeture, Container, Item, Title, HeaderText, Hr } from '../cardcss'
import TurkeyCityList from './TurkeyCityList'

function TurkiyeCity() {
    const { city, status } = useSelector(state => state.turkeycity)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCity())
    }, [])
    if (status === "loading") return "loading"
    return (
        <>
            <HeaderText>Türkiye Cities of Weather</HeaderText>
            <Hr />
            <CardContainer>
                {city.current && (
                    <Card>
                        <Title>{city.name}</Title>
                        <Title>CURRENT</Title>
                        <img src={`/animated/${city.current.weather[0].icon}.svg`} alt={city.name} />
                        <Tempeture>
                            {city.current.temp} <span>&#8451;</span>
                        </Tempeture>
                        <Container>
                            <Item>
                                SUNRISE: {moment.unix(city.current.sunrise).tz(city.timezone).format("LT")}
                            </Item>
                            <Item>
                                SUNSET : {moment.unix(city.current.sunset).tz(city.timezone).format("LT")}
                            </Item>
                        </Container>
                    </Card>
                )}
            </CardContainer>
            <TurkeyCityList daily={city.daily} name={city.name} timezone={city.timezone} />
        </>
    )
}

export default TurkiyeCity