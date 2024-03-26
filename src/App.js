import Accordian from './components/accordion';
import RandomColorGenerator from './components/color-generator';
import StarRatings from './components/start-ratings';
import ImageSlider from './components/image-slider';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data.';
import QRCodeGenerator from './components/qr-code-generator';
import ThemeChange from './components/theme-change';
import ScrollIndicator from './components/scroll-indicator';
import ModalPop from './components/model-pop-up/ModalPop';
import AutoComplete from './components/auto-complete/AutoComplete';
import TicTacToe from './components/tic-tac-toe/TicTacToe';
import UseFetchHookTest from './components/useFetch-customeHook';
import UseOneClickOuside from './components/useClickOutside-custom hook/useOneClickOutside';

function App() {
  return (
    <div className="App">
      <Accordian />
      <RandomColorGenerator />
      <StarRatings starNums={10} />
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={'2'}
        limit={'8'}
      />
      <TreeView menus={menus} />

      <QRCodeGenerator />

      <ThemeChange />

      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />

      <ModalPop />

      <AutoComplete />
      <TicTacToe />
      <UseOneClickOuside />
      {/* <UseFetchHookTest /> */}
    </div>
  );
}

export default App;
