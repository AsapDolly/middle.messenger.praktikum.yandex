import Handlebars from 'handlebars/dist/handlebars';
import profile from './profile.tmpl';
import {loginRender} from "../home/modules/Login";
import {passwordChangeRender} from '../PasswordChange';

export function profileRender(){
  const compiledTemplate = Handlebars.compile(profile);
  const props = {email: 'joey@bada$$.ru', display_name: 'Leon', login: 'JayOhVee', first_name: 'Jo-Vaughn', second_name: 'Scott', phone: '+7(420)6661995'};
  document.body.innerHTML = compiledTemplate({...props});

  document.querySelector('.profile__avatar-overlay').addEventListener('click', ()=> {
    document.querySelector('.profile__popup').classList.remove('profile__element_hidden');
  });

  document.querySelector('.profile__popup-overlay').addEventListener('click', ()=> {
    document.querySelector('.profile__popup').classList.add('profile__element_hidden');
  });

  document.querySelector('.profile__link-change-data').addEventListener('click', ()=> {
    document.querySelectorAll('.profile__input').forEach(inputElement => inputElement.readOnly = false);
    document.querySelector('.profile__bottom-links').classList.add('profile__element_hidden');
    document.querySelector('.profile__save-button').classList.remove('profile__element_hidden');
  });

  document.querySelector('.profile__link-change-password').addEventListener('click', ()=> {
    passwordChangeRender();
  });

  document.querySelector('.profile__link-logout').addEventListener('click', ()=> {
    loginRender();
  });

  document.querySelector('.profile__save-button').addEventListener('click', (evt)=> {
    evt.preventDefault();
    document.querySelectorAll('.profile__input').forEach(inputElement => inputElement.readOnly = true);
    document.querySelector('.profile__bottom-links').classList.remove('profile__element_hidden');
    document.querySelector('.profile__save-button').classList.add('profile__element_hidden');
  });
}