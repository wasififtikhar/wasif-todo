import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import i18n from './i18n';
import { Suspense, useState } from 'react';
import LocalContext from './LocalContext';
import { useTranslation } from 'react-i18next';

function Loading() {
  return(
    <>Loading...</>
  )
}

function App() {
  const {t} = useTranslation();
  const [local, setLocale] = useState(i18n.language)

  i18n.on('languageChanged', (lng) => setLocale(i18n.language))

  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value)
  }
  return (
    <div className="App">
      <LocalContext.Provider value={{local, setLocale}}>
      <Suspense fallback={<Loading />}>
        <Todo />
        <div className='selectLang'>
          <label>{t('select')}</label>
          <select value={local} onChange={handleChange}>
            <option value="en">English</option>
            <option value="ur">اردو</option>
          </select>
        </div>
     </Suspense>
     </LocalContext.Provider>
    </div>
  );
}

export default App;
