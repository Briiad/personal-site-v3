import { configureStore, createSlice } from '@reduxjs/toolkit'

// 1. Define a slice for your "Seamless" state
const uiSlice = createSlice({
  name: 'ui',
  initialState: { 
    isNavOpen: false, 
    previousPath: '',
    // This tracks the position of the project card for the "layoutId" animation
    activeProjectId: null as string | null, 
  },
  reducers: {
    toggleNav: (state) => { state.isNavOpen = !state.isNavOpen },
    setActiveProject: (state, action) => { state.activeProjectId = action.payload },
    setPreviousPath: (state, action) => { state.previousPath = action.payload },
  },
})

export const { toggleNav, setActiveProject, setPreviousPath } = uiSlice.actions

// 2. Create the store instance
export const makeStore = () => {
  return configureStore({
    reducer: {
      ui: uiSlice.reducer,
    },
  })
}

// 3. Export types
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']