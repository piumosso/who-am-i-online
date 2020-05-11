import {store} from './store';
import {connect, disconnect} from './actions';


const socket = io.connect();


socket.on('connect', () => store.dispatch(connect()));
socket.on('disconnect', () => store.dispatch(disconnect()));
