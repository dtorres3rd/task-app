import React from 'react';

import './App.css';

const App = () => {
  return (
    <div className='app'>
      <header className='app_header'>
        Header Section
        <main className='app_main'>
          <section className='task_column'>Section 1</section>
          <section className='task_column'>Section 2</section>
          <section className='task_column'>Section 3</section>
        </main>
      </header>
    </div>
  );
};

export default App;
