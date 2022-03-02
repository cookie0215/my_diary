import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Btn from '../components/Btn';
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";


const Home = () => {
  const [crrDate, setCrrDate] = useState(new Date());
  return (
    <div>
      <Header
        headerText={'2022.03.02'}
        leftChild={<Btn text={<LeftArrowIcon />} type={'icon'} onClick={() => alert("버튼클릭")}></Btn>}
        rightChild={<Btn text={<RightArrowIcon />} type={'icon'} onClick={() => alert("버튼클릭")}></Btn>}
      />
    </div >
  );
};

export default Home;