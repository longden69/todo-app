const uuidv4 = require('uuid/v4');

export default {
	mockItems: [
	        {
	         	id		: uuidv4(),
	         	name	: 'Study React',
	         	level	: 2 // 0: low, 1: medium, 2: high
	        },
	        {
	        	id		: uuidv4(),
	          	name	: 'Study Angular',
	          	level	: 1 // 0: low, 1: medium, 2: high
	        },
	        {
	        	id		: uuidv4(),
	          	name	: 'Study PHP',
	          	level	: 0 // 0: low, 1: medium, 2: high
	        }
	      ]
};
