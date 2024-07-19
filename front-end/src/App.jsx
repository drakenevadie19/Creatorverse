import './App.css'

import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import ListOfCreators from './components/list-of-creators';
import EditACreator from './components/edit-a-creator';
import AddNewCreator from './components/add-a-creator';
import ViewACreatorDetails from './components/view-a-creator-detail';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <Routes>
            <Route path="" element={<ListOfCreators />} />
            <Route path="/new" element={<AddNewCreator />} />
            <Route path="/edit/:id" element={<EditACreator />} />
            <Route path="/:id" element={<ViewACreatorDetails />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
