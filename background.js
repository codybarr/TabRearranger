chrome.commands.onCommand.addListener(function(command) {
	chrome.tabs.query({ currentWindow: true }, function(allTabs) {
		var lastIndex = allTabs[allTabs.length - 1].index // gets the index of the last tab

		chrome.tabs.query({ active: true, currentWindow: true }, function(tab) {
			var tab = tab[0] // only one active tab per current window
			var tab_location = tab.index
			var tab_new_location = 0

			if (command === 'move_tab_back') {
				tab_new_location = tab_location - 1
			} else if (command === 'move_tab_forward') {
				tab_new_location =
					tab_location === lastIndex ? 0 : tab_location + 1
			} else if (command === 'move_to_position_1') {
				tab_new_location = 0
			} else if (command === 'move_to_position_2') {
				tab_new_location = 1
			} else if (command === 'move_to_position_3') {
				tab_new_location = 2
			} else if (command === 'move_to_position_4') {
				tab_new_location = 3
			} else if (command === 'move_to_position_5') {
				tab_new_location = 4
			} else if (command === 'move_to_position_6') {
				tab_new_location = 5
			} else if (command === 'move_to_position_7') {
				tab_new_location = 6
			} else if (command === 'move_to_position_8') {
				tab_new_location = 7
			} else if (command === 'move_to_position_9') {
				tab_new_location = lastIndex
			}

			chrome.tabs.move(tab.id, { index: tab_new_location })
		})
	})
})
