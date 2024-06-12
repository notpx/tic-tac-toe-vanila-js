
    var turn = true;
    var final;
    function winnerChecker() {
        var cells = [[document.getElementById('one').innerHTML, document.getElementById('two').innerHTML, document.getElementById('three').innerHTML],
    [document.getElementById('four').innerHTML, document.getElementById('five').innerHTML, document.getElementById('six').innerHTML],
    [document.getElementById('seven').innerHTML, document.getElementById('eigth').innerHTML, document.getElementById('nine').innerHTML]];


    //checking for each row 
    for (var i = 0; i < 3; i++) {
            if (cells[i][0] == cells[i][1] && cells[i][1] == cells[i][2]) {
                return document.getElementById('win').innerHTML = "winner is" + cells[i][0];
    final = true;

            }

        }

    //checking for column
    for (var j = 0; j < 3; j++) {
            if (cells[0][j] == cells[1][j] && cells[1][j] == cells[2][j]) {
                return document.getElementById('win').innerHTML = "winner is" + cells[0][j];
    final = true;
            }
        }

    var z = 0;
    var rz = 2;
    if (cells[z][z] == cells[z + 1][z + 1] && cells[z + 1][z + 1] == cells[z + 2][z + 2]) {
            return document.getElementById('win').innerHTML = "winner is" + cells[z][z];
    final = true;
        }


    if (cells[0][2] == cells[1][1] && cells[1][1] == cells[2][0]) {
                return document.getElementById('win').innerHTML = "winner is" + cells[0][2];
    final = true;
            }


    if (final)  {
    
        for(var k = 0; k<3; k++){
        cells[k][k + 1] = "Z";   
        }


    }
}

    function replacer(id) {
        if (document.getElementById(id).innerHTML !== "") {
        document.getElementById(id).innerHTML = turn ? 'O' : 'X';
    turn = !turn;
    winnerChecker();

        }

    }

