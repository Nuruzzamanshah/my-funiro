import './App.css';
import Card from './Pages/Home/Card';
import Carousel from './Pages/Home/Carousel';
import Categories from './Pages/Home/Categories';
import Footer from './Pages/Home/Footer';
import GridSection from './Pages/Home/GridSection';
import Info from './Pages/Home/Info';
import Navbar from './Pages/Home/Navbar';
import SubTitle from './Pages/Home/SubTitle';
import SubTitles from './Pages/Home/SubTitles';
import Title from './Pages/Home/Title';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Info></Info>
      <Title></Title>
      <Categories></Categories>
      <SubTitle></SubTitle>
      <Card></Card>
      <Carousel></Carousel>
      <SubTitles></SubTitles>
      <GridSection></GridSection>
      <Footer></Footer>
    </div>
  );
}

export default App;
