import './App.css';
import Categories from './Components/Categories';
import Menu from './Components/Menu';
import items from './Components/Data';
import {useState} from 'react';

const categories = ['all',...new Set(items.map(item => item['category']))]

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
        if(category === 'all'){
          setMenuItems(items);
        }else {
          setMenuItems(() => items.filter((item) => item.category === category));
        }
	}

  return (
      <main>
        <section className='menu section'>
            <div className='title'>
              <h1>Our Menu</h1>
              <div className='underline'></div>
            </div>
            <Categories categories={categories} filterItems={filterItems}/>
            <Menu  items={menuItems}/>
        </section>
      </main>
  );
}

export default App;
