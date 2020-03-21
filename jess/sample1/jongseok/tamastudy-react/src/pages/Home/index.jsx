import React, { useContext } from 'react';
import WithAuth, { AuthContext } from '../../hoc/WithAuth';
import HomeNavSlider from '../../components/organisms/HomeNavSlider';
import HomeMainSlider from '../../components/organisms/HomeMainSlider';

const Home = () => {
  // eslint-disable-next-line
  const auth = useContext(AuthContext);
  return (
    <>
      <HomeNavSlider />
      <HomeMainSlider />
    </>
  );
};

export default WithAuth(Home);
