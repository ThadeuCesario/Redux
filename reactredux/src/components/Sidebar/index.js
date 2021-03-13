import React from 'react';
import {connect} from 'react-redux';
import {toggleLesson} from '../../store/actions/course';

const Sidebar = ({modules, dispatch}) => {
  return (
    <aside>
      {modules.map(module => {
        return (
          <div key={module.id}>
            <strong >{module.title}</strong>
            <ul>
              {module.lessons.map(lesson => {
                return (
                  <li key={lesson.id}>
                    {lesson.title}
                    <button onClick={() => dispatch(toggleLesson(module, lesson))}>Selecionar</button>
                  </li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </aside>
  )
}

export default connect(state => ({modules: state.course.modules}))(Sidebar);