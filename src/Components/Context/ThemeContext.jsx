import React, {createContext,useEffect,useState} from 'react'

export const theme = createContext();

const getTheme = ()=>{
  
  return (JSON.parse(localStorage.getItem('Theme')));
}

const ThemeContext = ({children}) => {

  const [themevalue, SetThemeValue] = useState(getTheme(),+false);

  const click = ()=>{ 

    SetThemeValue(+!themevalue)
  }

  useEffect(() => {
    localStorage.setItem('Theme', JSON.stringify(themevalue))
  }, [themevalue]);

    
  return (
    <theme.Provider value={{themevalue,SetThemeValue,click}}>
      {children}
    </theme.Provider>
  )
}

export default ThemeContext
