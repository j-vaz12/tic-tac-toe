	/*----- constants -----*/
    const COLOR_LOOKUP = {
        '1': 'purple',
        '-1': 'orange',
        'null': 'white'
      };

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ];
      
	/*----- state variables -----*/
    let board;
    let turn;
    let winner;
	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
