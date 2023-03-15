# Description

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

There is a [list of analytics events](http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd)  with timestamps (time in milliseconds from the beginning of the video) and data about zone in the frame where the event occurred (coordinates in pixels)
[Test video stream](http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4)

The web application has the following functionality:
- Test video display with the ability to pause and resume video area by clicking on the video area
- Displaying of the list of the analytics events with the ability to position the video at the moment
- The list of events is sorted by date of occurrence, the event is displayed in the list as the time of its occurrence in the format `MM:SS:sss`
- When an event occurs, a green rectangle is drawn on top of the video in the player,corresponding to the area defined in the event.The rectangle is displayed as at event from the list of events, and in the case of normal playback and navigation through the video. 
- When the end date of the event is reached, the rectangle is hidden.
- It is possible that 2 or more rectangles are displayed simultaneously.

## Launch of the project

To launch project on your local machine:

- Clone this repo to your local machine
- In the project directory run `npm i`
- Run `npm start`
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser

## Tests

- Run `npm test` to run all tests
- See the result in console

---
# Описание

Этот проект был создан с помощью [Create React App](https://github.com/facebook/create-react-app), с использованием [Redux](https://redux.js.org/) и [Redux Toolkit]. (https://redux-toolkit.js.org/). Шаблон TS.

Существует [список событий аналитики](http://www.mocky.io/v2/5e60c5f53300005fcc97bbdd) с метками времени (время в миллисекундах от начала видео) и данными о зоне в кадре, где произошло событие (координаты в пикселях)
[Тестовый видеопоток](http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4)

Веб-приложение имеет следующий функционал:
- Отображение тестового видео с возможностью приостановки и возобновления, при клике на область видео
- Отображение списка событий аналитики с возможностью позиционирования видео на момент указанный в событии
- Список событий отсортирован по дате возникновения, событие отображается в списке как время его возникновения в формате `MM:SS:sss`
- При возникновении события, поверх видео в плеере рисуется зеленый прямоугольник, соответствующий области, определенной в событии. Прямоугольник отображается как при событии из списка событий, так и в случае обычного воспроизведения и навигация по видео.
- Когда наступает дата окончания события, прямоугольник скрывается.
- Возможно одновременное отображение 2 и более прямоугольников.

## Запуск проекта

Чтобы запустить проект на локальном компьютере:

- Клонируйте этот репозиторий на свой локальный компьютер.
- В каталоге проекта запустите `npm i`
- Запустите `npm start`
- Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

## Тесты

- В каталоге проекта запустите  `npm test`, чтобы запустить все тесты
- Посмотрите результат в консоли
