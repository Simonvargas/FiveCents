import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RatingView } from 'react-simple-star-rating'

const Container = styled.div`
text-align: center;
max-width: 1200px;
margin-left: auto;
margin-right: auto;
`
const Header = styled.div`
padding: 100px 100px 10px 100px
h1 {
    font-size: 42px
}
`
const SubHeader = styled.div`
font-weight: 300;
font-size: 26px;
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-gap: 20px;
width: 100$;
padding: 20px;
`

const Card = styled.div`
border: 1px solid #efefef;
background: #fff;
`
const Logo = styled.div`
wdidth: 50px;

img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid #efefef;
}
`

const ShopName = styled.div`
padding: 20px 0 10px 0;
`

const LinkWrapper = styled.div`
margin: 30px 0 20px 0;
height: 50px;

a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    text-decoration: none;
}
`

const Home = () => {

    const [shops, setShops] = useState([])

    useEffect(() => {
        (async function () {
          const res = await fetch(`/businesses`)
    
          if (res.ok) {
            const shoppies = await res.json()
            setShops(shoppies)
          }
        })()
      }, [])

      console.log('shops', shops)
    return (
    <Container className=''>
        <Header className='header'>
        <h1>FiveCents</h1>
        <SubHeader className='subheader'>Honest, unbiased reviews of the things you love/hate</SubHeader>
        </Header>
        <Grid>
        {shops?.map(shop => {
            return (
                <Card>
                    <Logo>
                    <img src={shop.image_url} className='logo'></img>
                    </Logo>
                    <ShopName>{shop.name}</ShopName>
                    {/* <div className='score'>{(Math.round(shop.avg_score * 100) / 100).toFixed(2)}</div> */}
                    <RatingView ratingValue={(Math.round(shop.avg_score * 100) / 100).toFixed(2)} size={30} className="foo" />

                    <LinkWrapper >
                        <Link to={`/${shop.id}`}>View Shop</Link>
                    </LinkWrapper>
                </Card>
            )
        })}
        </Grid>
        </Container>
    )
}

export default Home;