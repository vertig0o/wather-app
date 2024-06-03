import moment from 'moment/moment'
import React from 'react'
import { Card, Container, Item, Tempeture, Title } from '../cardcss'

const Europe = ({ city }) => {
    const { weather, sys, name, main } = city

    return (
        <>
            {/* {<pre style={{ color: "#fff", fontSize: 14 }}>{JSON.stringify(city, null, 2)}</pre>} */}
            <Card>
                <Title>{name}</Title>
                <img src={`/animated/${weather[0].icon}.svg`} alt={name} />
                <Tempeture>
                    {main.temp} <span>&#8451;</span>
                </Tempeture>

                <Container>
                    <Item>
                        MIN :  {main.temp_min} <span>&#8451;</span>
                    </Item>
                    <Item>
                        MAX: {main.temp_max} <span>&#8451;</span>
                    </Item>
                </Container>
                <Container>
                    <Item>
                        SUNRISE: {moment.unix(sys.sunrise).format("LT")}
                    </Item>
                    <Item>
                        SUNSET : {moment.unix(sys.sunset).format("LT")}
                    </Item>
                </Container>
            </Card>


        </>
    )
}

export default Europe