import React from 'react';

import AppHeader from '../AppHeader';
import DataTableWithHooks from '../DataTable';
import './AppMain.css';

const App = () => {
  return (
    <div className='md-auto mx-auto'>
      <AppHeader />
      <div className='row text-centre'>
        <ul className='app-instructions'>
          <li>
            Чтобы добавить данные в таблицу, заполните поля ввода и нажмите
            кнопку Add
          </li>
          <li>
            Чтобы редактировать данные в таблице, выберите кандидата на
            редактирование, нажмите кнопку Red один раз. Данные отобразятся в
            поле ввода. Измените данные и нажмите кнопку Red для обновления
            данных в таблице
          </li>
          <li>
            Чтобы удалить данные из таблицы выберите кандидата на удаление и
            нажмите кнопку Del
          </li>
        </ul>
      </div>
      <DataTableWithHooks />
    </div>
  );
};
export default App;
