import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import loaderSlice from './loader/loaderSlice';
import statisticsSlice from './statistics/statisticsSlice';
import financeSlice from './finance/financeSlice';
import authSlice from './auth/authSlice';
import exchangeRatesReducer from "./exchange/exchangeRatesReducer"

const authPersistConfig = {
  key: 'auth',
  storage,
};

const exchangePersist = {
  key: 'exchange',
  storage,
};

export const store = configureStore({
  reducer: {
    isLoading: loaderSlice.reducer,
    exchangeRatesRoot: persistReducer(exchangePersist, exchangeRatesReducer),
    operations: financeSlice.reducer,
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    statistics: statisticsSlice.reducer,
  },
  middleware: [thunk],
});

export const persistor = persistStore(store);
