const repeatString = function(word, count) {
	let output = '';
	if(count >= 0){
	for(let i = 0; i < count; i++){
		output += word
	}
	}

	else output = 'ERROR'

	return output;
};

// Do not edit below this line
module.exports = repeatString;
