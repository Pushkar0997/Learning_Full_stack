//Rest Parameters

function setPermissionlevel(permissionlevel, name1,name2, name3){
    console.log(`${name1} now has ${permissionlevel} permission level.`);
    console.log(`${name2} now has ${permissionlevel} permission level.`);
    console.log(`${name3} now has ${permissionlevel} permission level.`);
}

setPermissionlevel("Admin","Alice","Bob","Charlie");

/*
The above method works fine when we have a fixed number of names to process.
But what if we have a variable number of names to process? 
In this case, we can use the rest parameters to handle this situation.
Also this is hard coded and we are repeating code.
*/

//Using Rest Parameters

function setPermissionlevelRest(permissionlevel,...names){
    names.forEach(name => {
        console.log(`${name} now has ${permissionlevel} permission level.`);
    });

}
console.log("Using Rest Parameters")
setPermissionlevelRest("Admin","Alice","Bob","Charlie","Ram","Sita");

function print(msg){
    console.log(msg);
}