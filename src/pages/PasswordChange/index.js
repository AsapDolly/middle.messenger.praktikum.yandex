import Handlebars from 'handlebars/dist/handlebars';
import passwordChange from './passwordChange.tmpl';

const compiledTemplate = Handlebars.compile(passwordChange);
document.body.innerHTML = compiledTemplate({});

document.querySelector('.password-change__form').addEventListener('submit', (evt)=> {
  evt.preventDefault();
  document.location.href = '/Profile.html'
});