import { DiaryItemWrap, Emotion, DateCont, DiaryDate, ContPreview, EditDelete } from './Styles';
import Btn from '../Btn/Btn';
import { ReactComponent as EditIcon } from "../../assets/edit.svg";
import { ReactComponent as RemoveIcon } from "../../assets/remove.svg";
import { useNavigate } from 'react-router-dom';


const DiaryItem = ({ id, emotion, date, content }) => {
  const navigator = useNavigate();
  const strDate = new Date(parseInt(date)).toLocaleDateString();
  const goDetail = () => {
    navigator(`/diary/${id}`)
  }
  const goEdit = () => {
    navigator(`/edit/${id}`)
  }

  return (
    <DiaryItemWrap>
      <Emotion onClick={goDetail}>
        <img
          src={require(`../../assets/emotion${emotion}.svg`)}
          alt={emotion} />
      </Emotion>
      <DateCont onClick={goDetail}>
        <DiaryDate>{strDate}</DiaryDate>
        <ContPreview>{content.length < 30 ? content : content.slice(0, 30) + "..."}</ContPreview>
      </DateCont>
      <EditDelete>
        <Btn text={<EditIcon />} type={'icon'} onClick={goEdit} />
        <Btn text={<RemoveIcon />} type={'icon'} />
      </EditDelete>
    </DiaryItemWrap >
  );
};

export default DiaryItem;