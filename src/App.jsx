import { MainButton, useShowPopup } from '@vkruglikov/react-telegram-web-app';

const App = () => {
  const showPopup = useShowPopup();

  const handleClick = () => 
    showPopup({
      message: 'Hello, I am popup',
    });

  return <div>
    <MainButton text="SHOW POPUP" onClick={handleClick} />
  </div>;
};

export default App;
