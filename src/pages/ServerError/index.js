import Handlebars from 'handlebars/dist/handlebars';
import serverError from './serverError.tmpl';

export function ServerErrorRender(){
  const compiledTemplate = Handlebars.compile(serverError);
  document.body.innerHTML = compiledTemplate({});
}