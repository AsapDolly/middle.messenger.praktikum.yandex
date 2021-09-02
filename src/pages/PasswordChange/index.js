import Handlebars from 'handlebars/dist/handlebars';
import passwordChange from './passwordChange.tmpl';
import {profileRender} from "../Profile";

export function passwordChangeRender(){
  const compiledTemplate = Handlebars.compile(passwordChange);
  document.body.innerHTML = compiledTemplate({});

  document.querySelector('.password-change__save-button').addEventListener('click', (evt)=> {
    evt.preventDefault();
    profileRender();
  });
}