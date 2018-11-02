/*    
  Copyright (C) 2018  Donny Verduijn

  The JavaScript code in this page is free software: you can
  redistribute it and/or modify it under the terms of the GNU
  General Public License (GNU GPL) as published by the Free Software
  Foundation, either version 3 of the License, or (at your option)
  any later version.  The code is distributed WITHOUT ANY WARRANTY;
  without even the implied warranty of MERCHANTABILITY or FITNESS
  FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.

  As additional permission under GNU GPL version 3 section 7, you
  may distribute non-source (e.g., minimized or compacted) forms of
  that code without the copy of the GNU GPL normally required by
  section 4, provided you include this license notice and a URL
  through which recipients can access the Corresponding Source.   
*/

import uuid from 'uuidv4';

const defaultOptions = {
  window,
  identifier: uuid(),
};

export default (passedOptions = {}) => {

  // declare private members
  let options, storage; 
  
  const initialize = () => {
    // merge options
    options = Object.assign({}, defaultOptions, passedOptions);
    // check if the window object hasn't been configured incorrectly
    if (!options.window) throw new Error('window object is not defined');
    // create a reference to the storage
    storage = options.window.localStorage;
  };

  const fetch = () => {
    return JSON.parse(storage.getItem(options.identifier));
  };

  const write = (value = {}) => {
    // use the identifier to store the serialized cache object
    storage.setItem(options.identifier, JSON.stringify(value));
  };

  // define private mambers
  initialize();

  // public API
  return {
    fetch,
    write
  };
};
