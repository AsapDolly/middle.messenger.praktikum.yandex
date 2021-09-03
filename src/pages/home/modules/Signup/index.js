import Handlebars from 'handlebars/dist/handlebars';
import signup from './signup.tmpl';

const compiled_template = Handlebars.compile(signup);
document.body.innerHTML = compiled_template({});