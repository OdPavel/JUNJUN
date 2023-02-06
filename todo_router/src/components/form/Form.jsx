import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, allRemoveTodo } from '../../store/todoSlice';
import styles from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [data, setData] = React.useState({ title: '', description: '' });

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(data));
    setData({ title: '', description: '' });
  };

  const handleInput = (text, name) => {
    setData({ ...data, [name]: text });
  };

  return (
    <div className="container">
      <div className={'row'}>
        <div className={'col-4'}>
          <form onSubmit={onSubmitHandler} className={styles.form}>
            <div className={'mb-3 mt-3'}>
              <label className={'form-label'}>Task title</label>
              <input
                onChange={(e) => handleInput(e.target.value, 'title')}
                className={'form-control'}
                type="text"
                placeholder="Title"
                required
                value={data.title}
              />
            </div>
            <div className={'mb-3'}>
              <label className={'form-label'}>Task body</label>
              <textarea
                onChange={(e) => handleInput(e.target.value, 'description')}
                className={'form-control'}
                placeholder="Task body"
                cols="21"
                rows="10"
                required
                value={data.description}
              />
            </div>

            <div className={'d-flex justify-content-between'}>
              <div>
                <button className={'btn btn-primary me-2'} type="submit">
                  Create task
                </button>
                <button
                  className={'btn btn-warning'}
                  type="reset"
                  onClick={() => setData({ title: '', description: '' })}>
                  Очистить
                </button>
              </div>
              <button
                onClick={() => dispatch(allRemoveTodo())}
                className={'btn btn-danger remove-all'}
                type="button">
                Удалить все
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
