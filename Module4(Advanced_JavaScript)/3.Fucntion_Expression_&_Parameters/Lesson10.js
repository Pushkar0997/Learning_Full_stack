import placeholderPropertyObj from './properties/placeholderPropertyObj.js';
import propertyForSaleArr from './properties/propertyForSaleArr.js';

function getPropertyHtml(propertyArr = [placeholderPropertyObj]) {
    return propertyArr
        .map(property => {
            const { propertyLocation, priceGBP, roomsM2, comment, image } = property;
            const totalRoomSizeM2 = roomsM2.reduce((total, current) => total + current, 0);
            return `
            <section class="card">
                <img src="./images/${image}" alt="Property Image">
                <div class="card-right">
                    <h2>${propertyLocation}</h2>
                    <h3>£${priceGBP}</h3>
                    <p>${comment}</p>
                    <h3>${totalRoomSizeM2} m²</h3>
                </div>
            </section>`;
        })
        .join('');
}

document.getElementById('container').innerHTML = getPropertyHtml(propertyForSaleArr)

/*
SUPER CHALLENGE 💪

Render out a card for each of the properties in the PropertyForSaleArr array(in the 
'properties folder). Each card should have an image , a property location, a price, 
a comment and the TOTAL property size in square meters ( each object has an array with
the size in square meters of the individual rooms - you will need to calculate the total
size by adding up the sizes of each room).

If no array of properties is passed into the getPropertyHtml, the placeholder property
stored in placeholderProperty.js (in the properties folder) should be rendered instead.

This is the JS properties you will need to use:
- import/export 
- .map()
- .join()
- Object Destructuring
- .reduce()
- Default Parameters

This is the HTML template here. Replace everything in ALL CAPS with the relevant property
data.

<section class = 'card'>
    <img src='IMAGE_URL_HERE' alt='Property Image'>
    <div class= 'card-right'>
        <h2>PROPERTY_LOCATION_HERE</h2>
        <p>Price: £PRICE_HERE</p>
        <p>Comment: COMMENT_HERE</p>
        <h3>Total Size: TOTAL_SIZE_HERE m²</h3>
    </div>
</section>
*/



function print(msg){
    console.log(msg);
}

//website: https://localhost