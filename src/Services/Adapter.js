import { Firebase } from './Firebase';
var adapter = Firebase;

export function setAdapter (newAdapter) {
  adapter = newAdapter;
};

function Api () {
  return adapter;
}

export default Api;