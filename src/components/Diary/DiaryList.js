import { useState } from 'react';
import ControlMenu from '../ControlMenu/ControlMenu';
import { DiaryListWrap, Sort } from './Styles';
import DiaryItem from './DiaryItem';

// 일기 정렬
const sortOptionList = [
  { value: "lastest", name: "최신순" },
  { value: "oldest", name: "오래된순" },
]

// 감정 옵션
const filterOptionList = [
  { value: "all", name: "모든 감정" },
  { value: "happy", name: "😁 행복" },
  { value: "normal", name: "😐 보통" },
  { value: "amazed", name: "😲 놀람" },
  { value: "cry", name: "😥 슬픔" },
  { value: "angry", name: "😡 화남" },
]


const DiaryList = ({ diaryList }) => {
  const [sortType, setSortType] = useState("lastest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const compare = (a, b) => {
      if (sortType === "lastest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    }
    const filterCallBack = (item) => {
      if (filter === "angry") {
        return parseInt(item.emotion) === 1;
      }
      if (filter === "cry") {
        return parseInt(item.emotion) === 2;
      }
      if (filter === "amazed") {
        return parseInt(item.emotion) === 3;
      }
      if (filter === "normal") {
        return parseInt(item.emotion) === 4;
      }
      if (filter === "happy") {
        return parseInt(item.emotion) === 5;
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));
    const filteredList = filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

    const sortedList = filteredList.sort(compare);
    return sortedList;
  }

  return (
    <DiaryListWrap>
      <Sort>
        <ControlMenu
          value={sortType}
          onChange={setSortType}
          optionList={sortOptionList}
        />
        <ControlMenu
          value={filter}
          onChange={setFilter}
          optionList={filterOptionList}
        />
      </Sort>
      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </DiaryListWrap>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;