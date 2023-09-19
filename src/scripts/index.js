import '../style.css';
import '../template.html';
import { controls, apiToDom } from './dom';

controls().initializeControls();

apiToDom().populateDom('Benevento');
