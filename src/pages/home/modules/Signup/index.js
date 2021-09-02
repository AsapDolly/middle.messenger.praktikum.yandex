import Handlebars from 'handlebars/dist/handlebars';
import signup from './signup.tmpl';
import {loginRender} from '../Login';

export function signupRender(){
  const compiled_template = Handlebars.compile(signup);
  document.body.innerHTML = compiled_template({});
  document.querySelector('.signup__login-text_link').addEventListener('click', ()=> {
    loginRender();
  });
}