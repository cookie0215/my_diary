import { Button } from './Styles';

const Btn = ({ text, onClick, type }) => {
  return (
    <Button className={['btn', `btn_${type}`].join(" ")} onClick={onClick}>
      {text}
    </Button>
  );
};

export default Btn;