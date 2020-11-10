jq2 = jQuery.noConflict();
jq2(function($) {
    var animals = [{
        name: 'Fluffykins',
        species: 'rabbit'
    }, {
        name: 'Caro',
        species: 'dog'
    }, {
        name: 'Hamilton',
        species: 'dog'
    }, {
        name: 'Harold',
        species: 'fish'
    }, {
        name: 'Ursula',
        species: 'cat'
    }, {
        name: 'Jimmy',
        species: 'fish'
    }];
    // $('.animals').css('background', 'black');
    // $('.animals').css('color', 'white');

    function printAnimals() {
        count = 0;
        var prints = animals.map(function(animal) {
            for (i = 0; i <= count; i++) {
                console.log(animal.name + ' is a ' + animal.species);
                $(".animals").append("<p>" + animal.name + " is a " + animal.species + "<p>");
            };
        });
    };
    printAnimals();
});