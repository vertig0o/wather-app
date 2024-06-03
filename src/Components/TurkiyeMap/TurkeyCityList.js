
import React from 'react'
import { CardContainer, Container, Item, Tempeture, Title, Card } from '../cardcss'
import { nanoid } from '@reduxjs/toolkit'
import moment from 'moment-timezone'
function TurkeyCityList({ daily, name, timezone }) {

    return (
        <div>
            <CardContainer>
                {daily && (
                    daily.map((item, idx) => {
                        return idx > 0 && idx < 6 ? (
                            <Card key={nanoid()}>
                                <Title>{moment.unix(item.dt).tz(`${timezone}`).format("dddd")}</Title>
                                <img src={`/animated/${item.weather[0].icon}.svg`} alt={name} />
                                <Tempeture>
                                    {item.temp.day} <span>&#8451;</span>
                                </Tempeture>

                                <Container>
                                    <Item>
                                        MIN :  {item.temp.min} <span>&#8451;</span>
                                    </Item>
                                    <Item>
                                        MAX: {item.temp.max} <span>&#8451;</span>
                                    </Item>
                                </Container>
                                <Container>
                                    <Item>
                                        SUNRISE: {moment.unix(item.sunrise).tz(timezone).format("LT")}
                                    </Item>
                                    <Item>
                                        SUNSET : {moment.unix(item.sunset).tz(timezone).format("LT")}
                                    </Item>
                                </Container>
                            </Card>
                        ) : null
                    }
                    )
                )
                }
            </CardContainer>
        </div>

    )
}

export default TurkeyCityList