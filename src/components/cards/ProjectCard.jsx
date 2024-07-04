import React from 'react';
import ProjectIcon from './ProjectIcon';

const ProjectCard = ({
  _id,
  project,
  color,
  title,
  tags,
  formattedDate,
  key,
}) => {
  return (
    <div
      key={_id}
      className='bg-white p-3 rounded border mt-3 mt-md-0 d-flex flex-column gap-2'
    >
      <img className='rounded border' src={project} alt='Project' />
      <ProjectIcon
        height="20px"
        width="20px"
        fontSize="12px"
        color={color} title={title} />
      <h5 style={{ marginBottom: 0 }}>{title}</h5>
      <div className='d-flex flex-wrap gap-1'>
        {tags.map((tag, index) => (
          <span key={index} className='badge bg-secondary'>
            {tag}
          </span>
        ))}
      </div>
      <span>Edited {formattedDate}</span>
    </div>
  );
};

export default ProjectCard;
