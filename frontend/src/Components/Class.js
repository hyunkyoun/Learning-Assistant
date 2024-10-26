import React from 'react';
import { Link } from 'react-router-dom';

function Class(props) {
    return (
        <li className='class_item'>
            <Link className='class_item_link' to={props.path}>
                <div className='class_item_pic-wrap'>
                    {props.src ? (
                        <img
                            className='class_item_img'
                            alt='Class Image'
                            src={props.src}
                            onError={(e) => {
                                e.target.onerror = null; // Prevent looping
                                e.target.src = 'path/to/placeholder/image.jpg'; // Placeholder image path if desired
                            }}
                        />
                    ) : (
                        <div style={{ backgroundColor: 'lightblue', height: '100%', width: '100%', borderRadius: '10px' }} />
                    )}
                </div>
                <div className='class_item_info'>
                    <h5 className='class_item_text'>{props.text}</h5>
                    <p className='class_item_professor'>{props.professor}</p>
                </div>
            </Link>
        </li>
    );
}

export default Class;
