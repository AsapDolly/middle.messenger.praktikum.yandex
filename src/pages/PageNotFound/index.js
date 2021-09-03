import Handlebars from 'handlebars/dist/handlebars';
import pageNotFound from './pageNotFound.tmpl';

const compiledTemplate = Handlebars.compile(pageNotFound);
document.body.innerHTML = compiledTemplate({});
