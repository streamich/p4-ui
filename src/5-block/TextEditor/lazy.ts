import {lazy} from '../../utils/lazy';
import {loadCodeMirror} from './loadCodeMirror';

export default lazy(() => {
  loadCodeMirror(); // Start pre-loading CodeMirror.
  return import('.');
});
