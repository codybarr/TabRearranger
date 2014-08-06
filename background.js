
chrome.commands.onCommand.addListener(function(command) {

  chrome.tabs.query({currentWindow:true}, function(allTabs) {
    var lastIndex = allTabs[allTabs.length - 1].index // gets the index of the last tab

    chrome.tabs.query({active:true, currentWindow:true}, function(tab) {

      var tab = tab[0] // only one active tab per current window
      var tab_location = tab.index
      var tab_new_location = 0
      if (command == 'move_tab_back')
        tab_new_location = tab_location - 1
      else if (command == 'move_tab_forward') {
        if (tab_location == lastIndex)
          tab_new_location = 0
        else
          tab_new_location = tab_location + 1
      }

      console.log('Last index:', lastIndex)
      console.log('Tab', tab.id, 'was moved from position', tab_location, 'to', tab_new_location);

      chrome.tabs.move(tab.id, {index: tab_new_location})
    });

  });



});