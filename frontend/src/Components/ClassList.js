import React, { useState } from 'react';
import '../Components/Class.css';
import Class from '../Components/Class';
import AddClassModal from '../Components/AddClass';

function ClassList() {
  const [classes, setClasses] = useState([
    { text: 'Test Class 1', professor: 'Professor Brown' },
    { text: 'Test Class 2', professor: 'Professor Garcia' },
    { text: 'Test Class 3', professor: 'Professor Wilson' }
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addClass = (newClass) => {
    setClasses((prevClasses) => [...prevClasses, newClass]);
  };

  return (
    <div className='ClassList'>
      <div className='class_container'>
        <div className='class_wrapper'>
          <ul className='class_items'>
            {classes.map((classItem, index) => (
              <Class
                key={index}
                text={classItem.text}
                professor={classItem.professor}
              />
            ))}
            <li className='class_item add_class_card' onClick={() => setIsModalOpen(true)}>
              <div className='add_class_content'>
                <span className='add_class_plus'>+</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {isModalOpen && (
        <AddClassModal onClose={() => setIsModalOpen(false)} onAddClass={addClass} />
      )}
    </div>
  );
}

export default ClassList;
