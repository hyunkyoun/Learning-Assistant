import React from 'react';
import '../Components/Class.css';
import Class from '../Components/Class';

function ClassList() {
  return (
    <div className='ClassList'>
      <div className='class_container'>
        <div className='class_wrapper'>
          <ul className='class_items'>
            <Class
              text='Test Class 1'
              professor='Professor Brown'
              path='./ClassLayout/MainLayout/MainLayout'
            />
            <Class
              text='Test Class 2'
              professor='Professor Garcia'
              path='/products'
            />
            <Class
              text='Test Class 3'
              professor='Professor Wilson'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ClassList;
