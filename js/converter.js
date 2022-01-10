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

getButtons.forEach(e => {
	e.style.display = 'none';
	if ((e.getAttribute('data-moneyType') == 'cashPlus') || (e.getAttribute('data-moneyType') == 'cash')) {
		show(e);
	}
});


async function getCurruncy() {
	const response = await fetch('https://api.001k.exchange/api/courses');
	const data = await response.json();
	result = await data;
	if (trigger == 1) {
		course = result.USDTTRC.CARDRUB.Cashless.get;
	}
	console.log(result.BTC.CASHRUB.MSK.get);
	// console.log(result[val].CARDRUB.Cashless.get);
	console.log(result);
}


// setInterval(() => getCurruncy(), 10000);



function removeActiveClass(side) {
	side.forEach(el => {
		el.classList.remove('active-button-effect');
	});
}

function show(e) {
	removeActiveClass(getButtons);
	e.style.display = 'block';
	e.classList.add('fade');

}


function selectButton(buttonSelector, btnId, btnAtrribute, dataSide, select) {
	buttonSelector.forEach(el => {
		el.addEventListener('click', ev => {
			trigger = 0;

			if (el.getAttribute('data-side') == 'give') {
				if (el.getAttribute('data-moneyType') == 'cryptoPlus') {
					getButtons.forEach(e => {
						e.style.display = 'none';
						if ((e.getAttribute('data-moneyType') == 'cashPlus') || (e.getAttribute('data-moneyType') == 'cash')) {
							show(e);
							document.querySelector('[data-btnGetId="CARDRUB"]').classList.add('active-button-effect');
							btnGetId = 'CARDRUB';
						}
					});
				} else if (el.getAttribute('data-moneyType') == 'crypto') {
					getButtons.forEach(e => {
						e.style.display = 'none';
						if (e.getAttribute('data-moneyType') == 'cash') {
							show(e);
							document.querySelector('[data-btnGetId="CARDRUB"]').classList.add('active-button-effect');
							btnGetId = 'CARDRUB';
						}
					});
				} else if (el.getAttribute('data-moneyType') == 'payment') {
					getButtons.forEach(e => {
						e.style.display = 'none';
						if (e.getAttribute('data-btnGetId') == 'CASHUSD') {
							show(e);
							document.querySelector('[data-btnGetId="CASHUSD"]').classList.add('active-button-effect');
							btnGetId = 'CASHUSD';
						}
					});
				} else if ((el.getAttribute('data-moneyType') == 'cash') && (el.getAttribute('data-btnId') !== 'CASHUSD')) {
					getButtons.forEach(e => {
						e.style.display = 'none';
						if (e.getAttribute('data-moneyType') == 'crypto') {
							show(e);
							document.querySelector('[data-btnGetId="USDTTRC"]').classList.add('active-button-effect');
							btnGetId = 'USDTTRC';
						}
					});
				} else if (el.getAttribute('data-btnId') == 'CASHUSD') {
					getButtons.forEach(e => {
						e.style.display = 'none';
						if ((e.getAttribute('data-moneyType') == 'crypto') || (e.getAttribute('data-moneyType') == 'payment') || (e.getAttribute('data-moneyType') == 'cashPlus')) {
							show(e);
							document.querySelector('[data-btnGetId="USDTTRC"]').classList.add('active-button-effect');
							btnGetId = 'USDTTRC';
						}
					});
				}
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


			if (el.getAttribute('data-moneyType') == 'payment') {
				course = result[btnGiveId].CASHUSD.ODS.get;
				console.log(course);
				giveToGet();
				// } else if ((el.getAttribute('data-moneyType') == 'crypto') || (el.getAttribute('data-moneyType') == 'cryptoPlus')) {
				// 	if ((btnGetId == 'CARDRUB') || (btnGetId == 'CARDUAH')) {
				// 		course = result[btnGiveId][btnGetId].Cashless.send;
				// 		console.log(course);
				// 		getToGive();
				// 	} else if (btnGetId == 'CASHRUB') {
				// 		course = result[btnGiveId][btnGetId].MSK.send;
				// 		console.log(course);
				// 		getToGive();
				// 	} else if ((btnGiveId == 'CARDRUB') || (btnGiveId == 'CARDUAH')) {
				// 		course = result[btnGiveId][btnGetId].Cashless.send;
				// 		console.log(course);
				// 		giveToGet();
				// 	} else if (btnGiveId == 'CASHRUB') {
				// 		course = result[btnGiveId][btnGetId].MSK.send;
				// 		console.log(course);
				// 		giveToGet();
				// 	}
			} else if ((btnGiveId == 'CARDRUB') || (btnGiveId == 'CARDUAH')) {
				course = result[btnGiveId][btnGetId].Cashless.send;
				console.log(course);
				getToGive();

			} else if ((btnGetId == 'CARDRUB') || (btnGetId == 'CARDUAH')) {
				course = result[btnGiveId][btnGetId].Cashless.get;
				console.log(course);
				giveToGet();
			}

			// if (buttonSelector == giveButtons) {
			// 	giveToGet();
			// } else {
			// 	getToGive();
			// }

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
	if ((btnGiveId == 'CARDRUB') || (btnGiveId == 'CARDUAH') || (btnGiveId == 'CASHRUB') || (btnGiveId == 'CASHUSD')) {
		inputGet.value = inputGive.value / course;
	} else {
		inputGet.value = inputGive.value * course;
	}

}

function getToGive() {
	if ((btnGiveId == 'CARDRUB') || (btnGiveId == 'CARDUAH') || (btnGiveId == 'CASHRUB') || (btnGiveId == 'CASHUSD')) {
		inputGive.value = inputGet.value * course;
	} else {
		inputGive.value = inputGet.value / course;
	}

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

// console.log(result.BTC.CASHRUB.MSK.get);