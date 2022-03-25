import './app3.css'
import $ from "jquery"

const $square = $('.app3 .square')
$square.on('click',()=>{
    // if($square.attr('class').indexOf('active') === -1){
    //     $square.addClass('active')
    // }else{
    //     $square.removeClass('active')
    // }
    $square.toggleClass('active')
})