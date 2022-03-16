import { useState, useRef, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DiaryDispatchContext } from '../../App';
import Header from '../Header/Header';
import Btn from '../Btn/Btn';
import {
  EditorWrap,
  Section,
  Title,
  InputWrap,
  Input,
  EmotionWrap,
  TextWrap,
  TextArea,
  ControlBox
} from './Styles';
import { ReactComponent as LeftArrowIcon } from "../../assets/arrow_left.svg";
import EmotionItem from './EmotionItem';

const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
}

const emotionList = [
  {
    emotionId: 1,
    emotionImg: `assets/emotion1.svg`,
    emotionDesc: "화남"
  },
  {
    emotionId: 2,
    emotionImg: `assets/emotion2.svg`,
    emotionDesc: "슬픔"
  },
  {
    emotionId: 3,
    emotionImg: `assets/emotion3.svg`,
    emotionDesc: "놀람"
  },
  {
    emotionId: 4,
    emotionImg: `assets/emotion4.svg`,
    emotionDesc: "보통"
  },
  {
    emotionId: 5,
    emotionImg: `assets/emotion5.svg`,
    emotionDesc: "행복"
  }
]


const Editor = ({ isEdit, originData }) => {
  const navigate = useNavigate();
  const contentRef = useRef();

  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");
  const [date, setDate] = useState(getStringDate(new Date()));

  const { onCreate, onEdit } = useContext(DiaryDispatchContext);
  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  }


  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (
      window.confirm(
        isEdit ? "일기를 수정하시겠습니까?" : "새로운 일기를 작성하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(date, content, emotion);
      } else {
        onEdit(originData.id, date, content, emotion);
      }
    }

    navigate("/", { replace: true });
  };

  useEffect(() => {
    if (isEdit) {
      setDate(getStringDate(new Date(parseInt(originData.date))));
      setEmotion(originData.emotion);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <>
      <Header
        headerText={isEdit ? "일기 수정" : "일기 쓰기"}
        leftChild={
          <Btn
            text={<LeftArrowIcon />}
            type={'icon'}
            onClick={() => navigate(-1)}
          />
        }
      />
      <EditorWrap>
        <Section>
          <Title>날짜 선택</Title>
          <InputWrap>
            <Input
              type="date"
              value={date}
              onChange={e => setDate(e.target.value)}
            />
          </InputWrap>
        </Section>
        <Section>
          <Title>감정 선택</Title>
          <EmotionWrap>
            {emotionList.map((it) =>
              <EmotionItem
                key={it.emotionId}
                {...it}
                onClick={handleClickEmotion}
                isSelected={it.emotionId === emotion}
              />
            )}
          </EmotionWrap>
        </Section>
        <Section>
          <Title>일기 작성</Title>
          <TextWrap>
            <TextArea
              placeholder="오늘의 감정을 기록해요!"
              ref={contentRef}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </TextWrap>
        </Section>
      </EditorWrap>
      <ControlBox>
        <Btn
          text={"완료"}
          type={"create"}
          onClick={handleSubmit}
        />
      </ControlBox>
    </>
  );
};

export default Editor;