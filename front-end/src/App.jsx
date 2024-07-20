import './App.css'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ShowCreators from './components/View All Creators/list-of-creators';
import EditCreator from './components/edit-a-creator';
import AddCreator from './components/add-a-creator';
import ViewCreator from './components/View A Creator/view-a-creator-detail';
import MainFrame from './components/main-frame';
import dummyData from './components/dummy-data';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="/" element={<MainFrame />}>
              <Route path="" element={<ShowCreators data={dummyData} />} />
              <Route path="new" element={<AddCreator />} />
              <Route path="edit/:id" element={<EditCreator />} />
              <Route path=':id' element={<ViewCreator />}/>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App;
