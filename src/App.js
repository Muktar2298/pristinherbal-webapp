import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BottomHeader from './components/BottomHeader/BottomHeader';
import MiddleHeader from './components/MiddleHeader/MiddleHeader';
import TopHeader from './components/TopHeader/TopHeader';
import HomePage from './Pages/HomePage/HomePage';

function App() {
  return (
    <div>
      {/* -------------HEADER-PART---------------- */}
      <header>
        {/* TOP-HEADER */}
        <div>
          <TopHeader />
          <MiddleHeader />
          <BottomHeader />
        </div>
      </header>
      {/* ---------------MAIN-PART---------------- */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </main>
      {/* ---------------Footer-PART-------------- */}
      <footer></footer>
    </div>
  );
}

export default App;
