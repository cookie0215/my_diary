import {
  EmotionItemWrap,
  EmotionImg,
  EmotionText
} from './Styles';

const EmotionItem = ({
  emotionId,
  emotionImg,
  emotionDesc,
  onClick,
  isSelected
}) => {
  return (
    <EmotionItemWrap
      className={[isSelected ? `emotionItem_on` : `emotionItem_off`].join(" ")}
      onClick={() => onClick(emotionId)}
    >
      <EmotionImg
        src={require(`../../${emotionImg}`)}
        alt={emotionDesc}
      />
      <EmotionText>{emotionDesc}</EmotionText>
    </EmotionItemWrap>
  );
};

export default EmotionItem;