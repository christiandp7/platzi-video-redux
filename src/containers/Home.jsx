import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

// const API = 'http://localhost:3000/initalState'

const Home = ({ myList, trends, originals }) => {
  // const initialState = useInitialState(API);
  // return initialState.length === 0 ? <h1>Loading...</h1> : (
    return (
    <>
      <Search isHome />
      {myList.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map(item =>
              <CarouselItem key={item.id} {...item} isList />
            )}
          </Carousel>
        </Categories>
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  const { myList, trends, originals } = state;
  return {
    // myList: state.myList,
    // trends: state.trends,
    // originals: state.originals
    myList,
    trends,
    originals,
  }
}

// export default Home;
export default connect(mapStateToProps, null)(Home);