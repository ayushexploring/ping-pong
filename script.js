$(function () {

    var anim_id;

    //saving dom objects to variables
    var container = $('#container');
    var ball = $('#ball');
    var paddle = $('.paddle');
    var paddle_1 = $('#paddle_1');
    var paddle_2 = $('#paddle_2');
    var restart_btn = $('#restart');

    //saving some initial setup
    var container_width = parseInt(container.width());
    var container_height = parseInt(container.height());
    var paddle_width = parseInt(paddle.width());
    var ball_height = parseInt(ball.height());
    var ball_width = parseInt(ball.width());

    //some other declarations
    var game_over = false;

    var ball_center;
    var paddle_center;

    var ball_go = 'down';
    var ball_right_left = 'right';

    var top = 6;
    var right_left_angle = 0;

    var move_right_p1 = false;
    var move_left_p1 = false;

    var move_right_p2 = false;
    var move_left_p2 = false;

    var who_won;

/* --------------------------GAME CODE START---------------------------------*/

    $(document).on('keydown', function(e){
        var key = e.keyCode;
        if (key == 37 && move_left_p1 == false){
            move_left_p1 = requestAnimationFrame(left_p1);
        } 
        else if (key == 39 && move_right_p1 == false){
            move_right_p1 = requestAnimationFrame(right_p1);
        }
        else if (key == 65 && move_left_p2 == false){
            move_left_p2 = requestAnimationFrame(left_p2);
        } 
        else if (key == 83 && move_right_p2 == false){
            move_right_p2 = requestAnimationFrame(right_p2);
        }   
    });

    $(document).on('keyup', function(e){
        var key = e.keyCode;
        if (key == 37){
            cancelAnimationFrame(move_left_p1);
            move_left_p1 = false;
        }
        else if (key == 39){
            cancelAnimationFrame(move_right_p1);
            move_right_p1 = false;
        }
        else if (key == 65){
            cancelAnimationFrame(move_left_p2);
            move_left_p2 = false;
        }
        else if (key == 83){
            cancelAnimationFrame(move_right_p2);
            move_right_p2 = false;
        }
    });

    function left_p1(){
        if(parseInt(paddle_1.css('left')) > 0){
            paddle_1.css('left', parseInt(paddle_1.css('left')) - 20);
            move_left_p1 = requestAnimationFrame(left_p1);
        }
    }

    function right_p1(){
        if(parseInt(paddle_1.css('left')) < container_width - paddle_width){
            paddle_1.css('left', parseInt(paddle_1.css('left')) + 20);
            move_right_p1 = requestAnimationFrame(right_p1);
        }
    }

    function left_p2(){
        if(parseInt(paddle_2.css('left')) > 0){
            paddle_2.css('left', parseInt(paddle_2.css('left')) - 20);
            move_left_p2 = requestAnimationFrame(left_p2);
        }
    }

    function right_p2(){
        if(parseInt(paddle_2.css('left')) < container_width - paddle_width){
            paddle_2.css('left', parseInt(paddle_2.css('left')) + 20);
            move_right_p2 = requestAnimationFrame(right_p2);
        }
    }
/* --------------------------GAME CODE END---------------------------------*/

});