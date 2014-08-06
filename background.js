// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
  console.log('onCommand event received for message: ', command);

  chrome.tabs.query({active:true, currentWindow:true}, function(tab) {
    console.log(tab[0])
    var tab = tab[0]
    var tab_location = tab.index
    var tab_new_location = 0
    if (command == 'move_tab_back')
      tab_new_location = tab_location - 1
    else if (command == 'move_tab_forward')
      tab_new_location = tab_location +1
    chrome.tabs.move(tab.id, {index: tab_new_location})
  });

});