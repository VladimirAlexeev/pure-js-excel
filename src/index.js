import { Excel } from '@/component/excel/Excel'
import { Header } from '@/component/header/Header'
import { Toolbar } from '@/component/toolbar/Toolbar'
import { Formula } from '@/component/formula/Formula'
import { Table } from '@/component/table/Table'
import './scss/index.scss'
import { createStore } from './core/createStore'
import { rootReducer } from './redux/rootReducer'
import { debounce, storage } from './core/utils'
import { initialState } from './redux/initialState'

const store = createStore(rootReducer, initialState);

const stateListener = debounce(state => {
  storage('excel-state', state);
}, 300)

store.subscribe(stateListener)

const excel = new Excel('#app', {
  components: [Header, Toolbar, Formula, Table],
  store
});

excel.render();