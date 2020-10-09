function setup() {
    createCanvas(500, 400);
    for (let i = 0; i < bubbleCount; i++) {
        var bubbleObject = new bubble();
        bubbles.push(bubbleObject)
    }
}

function draw() {
    clear()
    fill(0, 10, 53);
    textSize(32);
    text(backgroundText, 100, 200);
    for (let i = 0; i < bubbles.length; i++) {

        bubbles[i].draw()
        bubbles[i].update()

    }
}

var bubbleText = ''
var backgroundText = '"This" is your first clue!'
var bubbleCount = 500;
var bubbles = [];
var nextStage = false;

class bubble {
    constructor() {
        this.position = {
            'x': Math.floor(Math.random() * 500),
            'y': Math.floor(Math.random() * 500),
        };
        this.radius = Math.floor(Math.random() * 75 + 20);
        this.colour = `${Math.floor(Math.random() * 255)},${ Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}`;
    }
    draw() {
        noStroke()
        var colour = color(this.colour);
        fill(colour);
        circle(this.position.x, this.position.y, this.radius);
        textSize(this.radius / 3);
        fill('255, 255, 255');
        text(bubbleText, this.position.x - this.radius / 2.5, this.position.y + this.radius / 8);
        this.move()
    }
    move() {
        let randomNumber = Math.floor(Math.random() * 4)
        if (randomNumber == 0) {
            this.position.x += 1;
        } else if (randomNumber == 1) {
            this.position.x -= 1;
        } else if (randomNumber == 2) {
            this.position.y -= 1;
        } else if (randomNumber == 3) {
            this.position.y += 1;
        }
    }
    update() {
        let d = dist(mouseX, mouseY, this.position.x, this.position.y);

        if (d < this.radius / 2) {
            if (mouseX > this.position.x) {
                this.position.x -= 5;
            }
            if (mouseX < this.position.x) {
                this.position.x += 5;
            }
            if (mouseY > this.position.y) {
                this.position.y -= 5;
            }
            if (mouseY < this.position.y) {
                this.position.y += 5;
            }
            let colour = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
            this.colour = colour
        }

    }
}


$('#searchButton').on('click', function() {
    console.log($('#input').val())
    if ($('#input').val() == 'This' || $('#input').val() == 'this') {
        redHerring = false;
        bubbleText = '27';
        backgroundText = 'Try using your fingers...'
    } else if ($('#input').val() == 'Blue' || $('#input').val() == 'blue') {
        bubbleText = '"nope"';
        backgroundText = ''
    } else if ($('#input').val() == 'Nope' || $('#input').val() == 'nope') {
        $('#myModal').modal('show')
    }
});

for (let i = 0; i < 200; i++) {
    $('#buttonContainer').append(`<button class="btn btn-warning m-1" id="button${i + 1}"><small>${i + 1}</small></button>`)
}

$('#button112').on('click', function() {
    $('.button-colour').css('background-color', 'yellowGreen')
});

$('#button27').on('click', function() {
    $('.btn').removeClass('btn-warning')
    $('.btn').addClass('btn-primary')
});

$('#button1').on('click', function() {
    $('.button-colour').css('background-color', 'pink')
});

$('#blueButton').on('click', function() {
    $('#outputContainer').html("<p>This isn't not the wrong way.</p>")
})

$(document).ready(function() {
    $('#defaultCanvas0').addClass('d-block mx-auto')
})