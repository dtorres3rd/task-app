import React from 'react';
import './TaskCard.css';
import deleteIcon from '../images/delete.png';

import Tag from './Tag';

const TaskCard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className='task_card'>
      <p className='task_text'>{title}</p>

      <div className='task_card_bottom_line'>
        <div className='task_card_tags'>
          {tags.map((tag, index) => {
            return (
              <Tag
                key={index}
                tagName={tag}
                selected={true}
                notClickable={true}
              />
            );
          })}
        </div>
        <div className='task_delete' onClick={() => handleDelete(index)}>
          <img src={deleteIcon} className='delete_icon' />
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
