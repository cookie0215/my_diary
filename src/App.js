import React, { useReducer, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import GlobalStyle from './styles/GlobalStyle';
import GlobalFonts from './styles/fonts/font';
import theme from './styles/theme';
import Layout from './components/Layout';
import Home from './pages/Home';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import Write from './pages/Write';


const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id != action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) => it.id === action.data.id ? { ...action.data } : it);
      break;
    }
    default:
      return state;
  }

  return newState;
}

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // 일기 생성
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  }

  // 일기 삭제
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  }

  // 일기 수정
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        data: {
          id: targetId,
          date: new Date(date).getTime(),
          content,
          emotion,
        }
      }
    })
  }


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider
        value={{
          onCreate,
          onRemove,
          onEdit,
        }}
      >
        <BrowserRouter>
          <GlobalStyle />
          <GlobalFonts />
          <ThemeProvider theme={theme}>
            <Routes>
              <Route path='/' element={<Layout><Home /></Layout>}></Route>
              <Route path='/diary' element={<Layout><Diary /></Layout>}></Route>
              <Route path='/edit' element={<Layout><Edit /></Layout>}></Route>
              <Route path='/write' element={<Layout><Write /></Layout>}></Route>
            </Routes>
          </ThemeProvider>
        </BrowserRouter>
      </DiaryDispatchContext.Provider >
    </DiaryStateContext.Provider >
  );
}

export default App;
