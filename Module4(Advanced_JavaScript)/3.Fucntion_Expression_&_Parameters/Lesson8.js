//The Rest Parameter Challenge

function getLabelsHtml(text,sender, ...staffObjs){
    return staffObjs.map ( staffObj => 
        `<div class='label-card'>
            <p> Dear ${staffObj.name} </p>
            <p> ${text} </p>
            <p> Best Wishes, </p>
            <p> ${sender} </P>
        </div>`
    ).join('');
}

/*
Challenge:
1. Add parameters.
2. Update the Html Template where you see **NAME**.
3. Return HTML template for each label.
*/

/*
<div class='label-card'>
    <p> Dear **NAME** </p>
    <p> ${text} </p>
    <p> Best Wishes, </p>
    <p> ${sender} </P>
</div>

*/


const text = 'Thank you for all your hardwork throughout the year! 🙏🎁'
const sender ="Pushkar"

document.getElementById('label-container').innerHTML = getLabelsHtml(
    text,
    sender,
    {name: 'Alice'},
    {name: 'Bob'},
    {name: 'Charlie'},
    {name: 'David'}
)

function print(msg){
    console.log(msg);
}