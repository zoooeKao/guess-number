'use strict';
/* 
let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', function () {
	let guestNum = Number(document.querySelector('.guess').value);
	let message = document.querySelector('.message');
	console.log(message, typeof message);
	let score = Number(document.querySelector('.score').textContent);
	console.log(score, typeof score);
	if (!guestNum) {
		message.textContent = '⛔ No Number!';
	} else if (guestNum > 20 || guestNum < 0) {
		message.textContent = 'Input the number between 0-20!';
	} else if (guestNum > secretNum) {
		message.textContent = '⬇ Too High!';
		score--;
	} else if (secretNum > guestNum) {
		message.textContent = '⬆ Too Low!';
		score--;
	} else {
		message.textContent = 'congrate!';
	}
});
 */
/* 
let secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;
document.querySelector('.check').addEventListener('click', function () {
	let guestNum = Number(document.querySelector('.guess').value);
	const message = document.querySelector('.message');
	// console.log(message, typeof message);
	const score = document.querySelector('.score');
	if (!guestNum) {
		message.textContent = '⛔ No Number!';
	} else if (guestNum > 20 || guestNum < 0) {
		message.textContent = 'Input the number between 0-20!';
	} else if (guestNum > secretNum) {
		message.textContent = '⬇ Too High!';
		score.textContent = Number(score.textContent) - 1;
	} else if (secretNum > guestNum) {
		message.textContent = '⬆ Too Low!';
		score.textContent = Number(score.textContent) - 1;
	} else {
		message.textContent = 'congrate!';
	}
});
 */
/* 
let score = 20;
let highscore = [0];
let secretNum = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const scoreDom = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	// when there is no input
	if (!guess) {
		message.textContent = '⛔ No Number!';

		// when range outside
	} else if (guess > 20 || guess < 0) {
		message.textContent = 'Input the number between 0-20!';

		// when guess is too high
	} else if (guess > secretNum) {
		score--;
		if (score <= 0) {
			message.textContent = 'You lose the game!';
			scoreDom.textContent = 0;
		} else {
			message.textContent = 'Too High!';
			scoreDom.textContent = score;
		}

		// when guess is too low
	} else if (secretNum > guess) {
		score--;
		if (score <= 0) {
			message.textContent = 'You lose the game!';
			scoreDom.textContent = 0;
		} else {
			message.textContent = 'Too Low!';
			scoreDom.textContent = score;
		}
		// when player wins
	} else {
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').textContent = secretNum;
		document.querySelector('.number').style.width = '30rem';
		message.textContent = 'congrate!';
		highscore.push(score);
		document.querySelector('.highscore').textContent = Math.max(...highscore);
	}
});
// again button
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNum = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	message.textContent = 'Start guessing...';
	scoreDom.textContent = score;
	document.querySelector('.guess').value = '';
});
 */

let score = 20;
let highscore = [0];
let secretNum = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
const scoreDom = document.querySelector('.score');

document.querySelector('.check').addEventListener('click', function () {
	let guess = Number(document.querySelector('.guess').value);

	// when there is no input
	if (!guess) {
		message.textContent = '⛔ No Number!';

		// when range outside
	} else if (guess > 20 || guess < 0) {
		message.textContent = 'Input the number between 0-20!';

		// when guess wrong
	} else if (guess !== secretNum) {
		score--;
		if (score <= 0) {
			message.textContent = 'You lose the game!';
			scoreDom.textContent = 0;
		} else {
			scoreDom.textContent = score;
			message.textContent = guess > secretNum ? 'Too High!' : 'Too Low!';
		}
	}
	// when player wins
	else {
		document.querySelector('body').style.backgroundColor = '#60b347';
		document.querySelector('.number').textContent = secretNum;
		document.querySelector('.number').style.width = '30rem';
		message.textContent = 'congrate!';
		highscore.push(score);
		document.querySelector('.highscore').textContent = Math.max(...highscore);
	}
});
// again button
document.querySelector('.again').addEventListener('click', function () {
	score = 20;
	secretNum = Math.trunc(Math.random() * 20) + 1;
	document.querySelector('body').style.backgroundColor = '#222';
	document.querySelector('.number').textContent = '?';
	document.querySelector('.number').style.width = '15rem';
	message.textContent = 'Start guessing...';
	scoreDom.textContent = score;
	document.querySelector('.guess').value = '';
});
