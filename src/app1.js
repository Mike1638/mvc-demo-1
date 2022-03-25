import "./app1.css"
import $ from "jquery"

const button1 = $('#add1')
const button2 = $('#minus1')
const button3 = $('#mul2')
const button4 = $('#divide2')

$('#result').text(localStorage.getItem("number"))
let  result = parseInt($('#result').text()) 
button1.on('click',()=>{
    result = result+1
    $('#result').text(result)
    localStorage.setItem("number",result)
})
button2.on('click',()=>{
    result=result-1
    $('#result').text(result)
    localStorage.setItem("number",result)
})
button3.on('click',()=>{
    result=result*2
    $('#result').text(result)
    localStorage.setItem("number",result)
})
button4.on('click',()=>{
    result=result/2
    $('#result').text(result)
    localStorage.setItem("number",result)
})