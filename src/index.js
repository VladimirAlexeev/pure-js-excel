import { Excel } from '@/component/excel/Excel'
import { Header } from '@/component/header/Header'
import { Toolbar } from '@/component/toolbar/Toolbar'
import { Formula } from '@/component/formula/Formula'
import { Table } from '@/component/table/Table'
import './scss/index.scss'
import { createStore } from './core/createStore'
import { rootReducer } from './redux/rootReducer'
import { storage } from './core/utils'

const store = createStore(rootReducer, storage('excel-state'));

store.subscribe(state => {
  console.log('App State: ', state);
  storage('excel-state', state);
})

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
});

excel.render();