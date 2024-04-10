import React from 'react';
import Footer from '../components/footer/Index';
import { useCategory } from '../hooks/useCategory';


export const Home = () => {
  const { isFetching, error } = useCategory();

  const displayContent = () => {
    if (isFetching) return <p>Loading...</p>;
    if (error) return <p>Oops, something went wrong...</p>

    return <>data</>
  }

  return <>
    <Footer />
    {displayContent()}
  </>
};

export default Home;
