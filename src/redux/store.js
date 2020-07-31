import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import loaderSlice from './loader/loaderSlice';

// import statisticsReducer from './statistics/statisticsReducer';
import operationsSlice from './operations/operationsSlice';
import authSlice from './auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const store = configureStore({
  reducer: {
<<<<<<< HEAD
    operations: operationsReducer,
    auth: persistReducer(authPersistConfig, authReducer),
=======
    isLoading: loaderSlice.reducer,
    operations: operationsSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
>>>>>>> origin/operations
    // statistics: statisticsReducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
