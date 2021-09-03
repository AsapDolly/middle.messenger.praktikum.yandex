import Handlebars from 'handlebars/dist/handlebars';
import login from './login.tmpl';

const compiledTemplate = Handlebars.compile(login);
document.body.innerHTML = compiledTemplate({});

document.querySelector('.login__form').addEventListener('submit', (evt)=> {
  evt.preventDefault();
  document.location.href = '/Profile.html'
});