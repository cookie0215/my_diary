import React, { useState } from 'react';
import Header from '../components/Header';
import Btn from '../components/Btn';
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";


const Home = () => {
  const [crrDate, setCrrDate] = useState(new Date());
  const headerText = `${crrDate.getFullYear()}년 ${crrDate.getMonth() + 1}월`
  const increaseMonth = () => {
    setCrrDate(new Date(crrDate.getFullYear(), crrDate.getMonth() + 1, crrDate.getDate()))
  }
  const decreaseMonth = () => {
    setCrrDate(new Date(crrDate.getFullYear(), crrDate.getMonth() - 1, crrDate.getDate()))
  }

  return (
    <>
      <Header
        headerText={headerText}
        leftChild={<Btn text={<LeftArrowIcon />} type={'icon'} onClick={decreaseMonth}></Btn>}
        rightChild={<Btn text={<RightArrowIcon />} type={'icon'} onClick={increaseMonth}></Btn>}
      />
    </>
  );
};

export default Home;