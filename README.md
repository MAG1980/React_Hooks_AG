# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


Набор полезных хуков, которые будут рассмотрены в курсе
и которые можно будет установить через NPM:
useTitle
useInput
usePageLeave
useClick
useFadeIn
useFullscreen
useHover
useNetwork
useNotification
useScroll
useTabs
usePreventLeave
useConfirm
useAxios

В отличие от классовых компонентов,
функциональные компоненты предоставляют более удобный и понятный интерфейс для работы с состоянием.
Код, написанный с использованием классовых компонентов более многословен,
т.к. для вызова методов класса и обращения к state
необходимо использоать ключевое слово this.
Кроме того, для повторного использования бизнес-логики, доступны только HOC.
Метод setState служит для изменения состояния компонента.
Он принимает callback.
callback принимает в качестве параметра состояние компонента (state),
и возвращает объект,
в котором изменяемому свойству присваивается новое значение, например:

state = {
    item: 1,
}
render() {
const {item} = this.state
return (
  <>
    <div>Item: {item}</div>
    <button onClick={this.incrementItem}>Увеличить</button>
    <button onClick={this.decreaseItem}>Уменьшить</button>
  </>
    )
incrementItem = () => {
   this.setState(state => {
      return {item: state.item + 1}
  })
  }
}

Хуки позволяют выносить практически всю бизнес-локику в отдельные файлы и повторно использовать их.

window.scrollY - положение прокрутки по оси y
window.addEventListener('scroll', onScroll) - прослушивание события прокрутки

requestFullscreen() - метод DOM-элементов, который разворачивает их во весь экран.
ref.current.requestFullscreen() 
DOMelement.requestFullscreen() 

exitFullScreen() - метод для выхода из полноэкранного режима
document.exitFullScreen()

В разных браузерах функции requestFullscreen и exitFullScreen могут иметь различные префиксы:
moz, webkit, ms,
поэтому желательно перед вызовом этих функций проверять их на существование.

Веб-технологии для разработчиков
https://developer.mozilla.org/ru/docs/Web

Notifications API
Notifications API позволяют web-страницам контролировать отображение системных уведомлений для конечного пользователя — они находятся вне контекста окна браузера верхнего уровня,
поэтому могут отображаться даже если пользователь сменил вкладку или перешёл к другому приложению. API были разработаны таким образом, чтобы поддерживать совместимость с существующими системами уведомлений на различных платформах.
https://developer.mozilla.org/ru/docs/Web/API/Notifications_API