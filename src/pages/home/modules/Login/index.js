import Handlebars from 'handlebars/dist/handlebars';
import login from './login.tmpl';
import {signupRender} from '../Signup';
import {profileRender} from '../../../Profile';

export function loginRender(){
  const compiledTemplate = Handlebars.compile(login);
  document.body.innerHTML = compiledTemplate({});

  document.querySelector('.login__signin-text_link').addEventListener('click', ()=> {
    signupRender();
  });

  document.querySelector('.login__button').addEventListener('click', ()=> {
    profileRender();
  });
}