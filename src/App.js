import React from 'react';
import MiddleHeader from './components/MiddleHeader/MiddleHeader';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <div>
      {/* -------------HEADER-PART---------------- */}
      <header>
        {/* TOP-HEADER */}
        <div>
          <TopHeader />
          <MiddleHeader />
        </div>
      </header>
      {/* ---------------MAIN-PART---------------- */}
      <main></main>
      {/* ---------------Footer-PART-------------- */}
      <footer></footer>
    </div>
  );
}

export default App;
