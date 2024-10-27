import React, { useState } from 'react';
import '../Components/AddClass.css';

function AddClass({ onClose, onAddClass }) {
  const [text, setText] = useState('');
  const [professor, setProfessor] = useState('');
  const [path, setPath] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddClass({ text, professor, path });
    onClose();
  };

  return (
    <div className='modal_overlay'>
      <div className='modal_content'>
        <h2>Add New Class</h2>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='Class Name'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Professor Name'
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
            required
          />
          <input
            type='text'
            placeholder='Path'
            value={path}
            onChange={(e) => setPath(e.target.value)}
            required
          />
          <button type='submit'>Add Class</button>
          <button type='button' onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default AddClass;
