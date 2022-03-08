import React, { useState, useContext, useEffect } from 'react';
import { DiaryStateContext } from '../App';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header/Header';
import Btn from '../components/Btn/Btn';
import DiaryList from '../components/Diary/DiaryList';
import { ReactComponent as LeftArrowIcon } from "../assets/arrow_left.svg";
import { ReactComponent as RightArrowIcon } from "../assets/arrow_right.svg";

const Home = () => {
  const navigate = useNavigate();
  const diaryList = useContext(DiaryStateContext);
  const [data, setData] = useState([]);

  const [crrDate, setCrrDate] = useState(new Date());
  const headerText = `${crrDate.getFullYear()}년 ${crrDate.getMonth() + 1}월`

  useEffect(() => {
    if (diaryList.length >= 1) {
      const firstDay = new Date(
        crrDate.getFullYear(),
        crrDate.getMonth(),
        1
      ).getTime();

      const lastDay = new Date(
        crrDate.getFullYear(),
        crrDate.getMonth() + 1,
        0
      ).getTime();

      setData(diaryList.filter((it) => firstDay <= it.date && it.date <= lastDay));
    }
  }, [diaryList, crrDate]);

  useEffect(() => { console.log(data) }, [data])

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
      <DiaryList diaryList={data} />
      <Btn type={"create"} text={"일기 쓰기"} onClick={() => navigate('/write')} />
    </>
  );
};


export default Home;