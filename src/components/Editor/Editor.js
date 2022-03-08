import { useState, useRef, useContext } from 'react';
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


const Editor = () => {
  const navigate = useNavigate();
  const contentRef = useRef();

  const [date, setDate] = useState(getStringDate(new Date()));
  const [emotion, setEmotion] = useState(3);
  const [content, setContent] = useState("");

  const { onCreate } = useContext(DiaryDispatchContext);
  const handleClickEmotion = (emotion) => {
    setEmotion(emotion);
  }


  const handleSubmit = () => {
    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }
    onCreate(date, content, emotion);
    navigate('/', { replace: true })
  }

  return (
    <>
      <Header
        headerText={"일기 쓰기"}
        leftChild={<Btn text={<LeftArrowIcon />} type={'icon'} onClick={() => navigate(-1)} />}
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
                key={it.emotionId} {...it}
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
        <Section>
          <ControlBox>
            <Btn text={"완료"} type={"create"} onClick={handleSubmit} />
          </ControlBox>
        </Section>
      </EditorWrap>
    </>
  );
};

export default Editor;