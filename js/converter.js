const
	allButtons = document.querySelectorAll('.block-btn'),
	selectGive = document.querySelector('#selectGive span'),
	selectGet = document.querySelector('#selectGet span'),
	moneyListGive = document.querySelectorAll('#dropdownGive li'),
	moneyListGet = document.querySelectorAll('#dropdownGet li'),
	giveButtons = document.querySelectorAll('[data-side="give"]'),
	getButtons = document.querySelectorAll('[data-side="get"]');


let
	inputGive = document.querySelector('#inputGive'),
	inputGet = document.querySelector('#inputGet'),
	btnGiveId = 'USDTTRC',
	btnGetId = 'CARDRUB',
	result,
	course,
	trigger = 1;


async function getCurruncy() {
	const response = await fetch('https://api.001k.exchange/api/courses');
	const data = await response.json();
	result = await data;
	if (trigger == 1) {
		course = result.USDTTRC.CARDRUB.Cashless.get;
	}
	console.log(result[btnGiveId].CARDRUB.Cashless.get);
	// console.log(result[val].CARDRUB.Cashless.get);
	console.log(result);
}


// setInterval(() => getCurruncy(), 10000);



function removeActiveClass(side) {
	side.forEach(el => {
		el.classList.remove('active-button-effect');
	});
}

function autoHideButtons() {


}

function selectButton(buttonSelector, btnId, btnAtrribute, dataSide, select) {
	buttonSelector.forEach(el => {
		el.addEventListener('click', ev => {
			trigger = 0;

			if (el.getAttribute('data-moneyType') == 'cryptoPlus') {
				getButtons.forEach(e => {
					e.style.display = 'none';
					if ((e.getAttribute('data-moneyType') == 'cashPlus') || (e.getAttribute('data-moneyType') == 'cash')) {
						e.style.display = 'block';
					}
				});
			} else if (el.getAttribute('data-moneyType') == 'crypto') {
				getButtons.forEach(e => {
					e.style.display = 'none';
					if (e.getAttribute('data-moneyType') == 'cash') {
						e.style.display = 'block';
					}
				});
			} else if (el.getAttribute('data-moneyType') == 'payment') {
				getButtons.forEach(e => {
					e.style.display = 'none';
					if (e.getAttribute('data-btnGetId') == 'CASHUSD') {
						e.style.display = 'block';
					}
				});
			} else if ((el.getAttribute('data-moneyType') == 'cash') && (el.getAttribute('data-btnId') !== 'CASHUSD')) {
				getButtons.forEach(e => {
					e.style.display = 'none';
					if (e.getAttribute('data-moneyType') == 'crypto') {
						e.style.display = 'block';
					}
				});
			} else if (el.getAttribute('data-btnId') == 'CASHUSD') {
				getButtons.forEach(e => {
					e.style.display = 'none';
					if ((e.getAttribute('data-moneyType') == 'crypto') || (e.getAttribute('data-moneyType') == 'payment') || (e.getAttribute('data-moneyType') == 'cashPlus')) {
						e.style.display = 'block';
					}
				});
			}



			btnId = el.getAttribute(btnAtrribute);

			if (buttonSelector == giveButtons) {
				btnGiveId = btnId;
			} else {
				btnGetId = btnId;
			}


			if (el.getAttribute('data-side') == dataSide) {
				select.innerHTML = btnId;
			}
			// if (el.getAttribute('data-moneyType') == 'cash') {
			// 	console.log(result[btnId].USDTTRC);
			// } else 
			if (el.getAttribute('data-moneyType') == 'payment') {
				course = result[btnGiveId].CASHUSD.ODS.get;
				console.log(result[btnGiveId].CASHUSD.ODS.get);
			}
			// else {
			// 	console.log(result[btnId].CARDRUB.Cashless.get);
			// }

			if (buttonSelector == giveButtons) {
				giveToGet();
			} else {
				getToGive();
			}

			console.log(btnId);
			removeActiveClass(buttonSelector);
			el.classList.add('active-button-effect');
		});
	});
}


function listToButtons(listName, buttonSelector, elementSelector, side) {
	listName.forEach(el => {
		el.addEventListener('click', ev => {
			removeActiveClass(side);
			document.querySelector(`[${buttonSelector}="${el.getAttribute(elementSelector)}"]`).classList.add('active-button-effect');
		});
	});
}

function giveToGet() {
	inputGet.value = inputGive.value * course;
}

function getToGive() {
	inputGive.value = inputGet.value / course;
}

inputGive.addEventListener('input', () => {
	giveToGet();
});

inputGet.addEventListener('input', () => {
	getToGive();
});


getCurruncy();

selectButton(giveButtons, btnGiveId, 'data-btnId', 'give', selectGive);
selectButton(getButtons, btnGetId, 'data-btnGetId', 'get', selectGet);
listToButtons(moneyListGive, 'data-btnId', 'data-listId', giveButtons);
listToButtons(moneyListGet, 'data-btnGetId', 'data-listGetId', getButtons);

// console.log(inputGet.value);