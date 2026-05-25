const lunches = [];
function addLunchToEnd (lunches, cade){

    lunches.push(cade)

    console.log(`${cade} added to the end of the lunch menu.`)

    return lunches;

}

addLunchToEnd(["Pizza", "Tacos"], "Burger");

function addLunchToStart (lunches, cade){

    lunches.unshift(cade);

    console.log(`${cade} added to the start of the lunch menu.`);

    return lunches;
}

addLunchToStart(["Burger", "Sushi"], "Pizza")

function removeLastLunch (lunches){

    if(lunches.length === 0){
        
        console.log("No lunches to remove.");

        return;

    }else{

        const removeLunch = lunches.pop();

        console.log(`${removeLunch} removed from the end of the lunch menu.`);

        return lunches;
    }
}

removeLastLunch(["Stew", "Soup", "Toast"])

function removeFirstLunch (lunches){

    if(lunches === 0){

        console.log("No lunches to remove.");

        return;

    }else{
        const removeFirs = lunches.shift();

        console.log(`${removeFirs} removed from the start of the lunch menu.`);
        
        return lunches
    }
}

removeFirstLunch(["Salad", "Eggs", "Cheese"])


