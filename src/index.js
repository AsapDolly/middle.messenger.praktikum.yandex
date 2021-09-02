import Handlebars from 'handlebars/dist/handlebars';
import {loginRender} from './pages/home/modules/Login/index';
import {pageNotFoundRender} from './pages/PageNotFound/index';
import {ServerErrorRender} from './pages/ServerError/index';

  document.addEventListener("DOMContentLoaded", (e) => {
    loginRender();
  });