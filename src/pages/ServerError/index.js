import Handlebars from 'handlebars/dist/handlebars';
import serverError from './serverError.tmpl';

const compiledTemplate = Handlebars.compile(serverError);
document.body.innerHTML = compiledTemplate({});