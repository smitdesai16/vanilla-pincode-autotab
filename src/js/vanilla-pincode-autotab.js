const vanillaPincodeAutotab = function(querySelector) {
	let elements = document.querySelectorAll(querySelector);
	elements.forEach(element => {
		element.addEventListener("keydown", function(event) {
			var move = 0;
			switch (event.keyCode) {
				//number 0
				case 48:
				case 96:
					element.value = "0";
					move = 1;
					event.preventDefault();
					break;

				//number 1
				case 49:
				case 97:
					element.value = "1";
					move = 1;
					event.preventDefault();
					break;

				//number 2
				case 50:
				case 98:
					element.value = "2";
					move = 1;
					event.preventDefault();
					break;

				//number 3
				case 51:
				case 99:
					element.value = "3";
					move = 1;
					event.preventDefault();
					break;

				//number 4
				case 52:
				case 100:
					element.value = "4";
					move = 1;
					event.preventDefault();
					break;

				//number 5
				case 53:
				case 101:
					element.value = "5";
					move = 1;
					event.preventDefault();
					break;

				//number 6
				case 54:
				case 102:
					element.value = "6";
					move = 1;
					event.preventDefault();
					break;

				//number 7
				case 55:
				case 103:
					element.value = "7";
					move = 1;
					event.preventDefault();
					break;

				//number 8
				case 56:
				case 104:
					element.value = "8";
					move = 1;
					event.preventDefault();
					break;

				//number 9
				case 57:
				case 105:
					element.value = "9";
					move = 1;
					event.preventDefault();
					break;

				case 8: //backspace
				case 46: //delete
					element.value = "";
					move = -1;
					event.preventDefault();
					break;

				case 9: //tab
					if (event.shiftKey) {
						move = -1;
					} else {
						move = 1;
					}
					event.preventDefault();
					break;

				case 86: //v
					if (!(event.ctrlKey || event.metaKey)) {
						event.preventDefault();
					}
					break;
				case 13: //enter
				case 16: //shift
				case 17: //ctrl
				case 91: //command in mac
					break;
				case 229: //android device on chrome always returns 229 keycode
					var androidKeyCode = element.value;
					if (typeof(androidKeyCode) === "number") {
						move = 1;
					}
					break;
				default:
					event.preventDefault();
			}

			for (var i = 0; i < elements.length; i++) {
				var prevElement;
				var nextElement;
				if (i - 1 >= 0) {
					prevElement = elements[i - 1];
				}
				if (i + 1 <= elements.length) {
					nextElement = elements[i + 1];
				}
				if (elements[i] == this) {
					switch (move) {
						case 1:
							if (nextElement) {
								nextElement.focus();
								return;
							}
							break;
						case -1:
							if (prevElement) {
								prevElement.focus();
								return;
							}
							break;
					}
				}
			}
		})

		element.addEventListener("paste", function(event){
			event.preventDefault();
			var clipboardData = event.clipboardData || event.originalEvent.clipboardData || window.clipboardData;
			var pastedData = clipboardData.getData('text/plain');
			for (var i = 0; i < elements.length; i++) {
				var data = pastedData[i];
				elements[i].value = data;
			}
		})
	});
};