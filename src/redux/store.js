import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loaderSlice from './loader/loaderSlice';

// import operationsReducer from './operations/operationsReducer';
// import statisticsReducer from './statistics/statisticsReducer';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    // operations: operationsReducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    // statistics: statisticsReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
