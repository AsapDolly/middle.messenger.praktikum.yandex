import Handlebars from 'handlebars/dist/handlebars';
import pageNotFound from './pageNotFound.tmpl';

export function pageNotFoundRender(){
  const compiledTemplate = Handlebars.compile(pageNotFound);
  document.body.innerHTML = compiledTemplate({});
}