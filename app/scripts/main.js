
var characterList = []

function Character(name,klass,ability1,ability2,ability3) {	
 if (name) 					{this.name = name }
 if (klass) 				{this.klass = klass }
 if (ability1) 			{this.ability1 = ability1 }
 if (ability2) 			{this.ability2 = ability2 }
 if (ability3) 			{this.ability3 = ability3 }
}
 
Character.prototype = {
	name: 		'NA',
	ability1: 'NA',
	ability2: 'NA',
	ability3: 'NA',
	health: 	100,
	stregnth: 10,
	magic: 		10,
	level: 		1,
};

var aaron = new Character ('Aaron','archer','volley','cripple','headshot')
var sarah = new Character ('Sarah','mage','fireball','heal','aovablast')
var talon = new Character ('Talon','warrior','strike','shield','beserkersrage')

characterList.push(talon)
characterList.push(sarah)
characterList.push(aaron)

$('.submit').click(function(){
	console.log('creating a new entrying into an array')
		var tmpname 	=	$('#name').val();
		var tmpklass 	=	$('#klass').val();
		var tmpab1 		=	$('#ability1').val();
		var tmpab2 		=	$('#ability2').val();
		var tmpab3 		=	$('#ability3').val();

		var tmpname 	= new Character(tmpname,tmpklass,tmpab1,tmpab2,tmpab3);
		
		characterList.push(tmpname);

		$('.recchar').append(function(){
			_.toString(_.first)
		})
})

console.log('if you guys look directly in the JS you will see all of the underscore use')
console.log('up here')
console.log('wrong way')
console.log('I am done')

// below will be the practice for underscore
// 1 the _.where allows me to find a particular property withn an array that is tied to an object
_.where(characterList, {name:'Sarah'})

// 2 next I tried the _.findWhere I notice that this only gives the FIRST value that matches my criteria even if there are more objects with that criteria
_.findWhere(characterList, {name: 'Talon'}) //thought find was going to do this but nope

// 3 _.contains was a pretty simple one and you explained in class
_.contains(characterList, talon)

// 4 _.pluck was a little more interesting first I tried
_.pluck(characterList,name)
	// this returned undefined for every object but then I tried, and the function worked as expected
_.pluck(characterList, 'name')

// 5 not sure what this did lol I'm guessing its becuase I have not #s in my list
_.min(characterList) //returned 'Infinity'

// 6 using the _.sortby allows me to get alphabetically sorted objects by a particluar object property 
_.sortBy(characterList, 'ability3');

// I'm not that familiar with iterators so I'll need some help with those

// 7 using this funciton allows me to shuffle the array of my objects
_.shuffle(characterList)

// 8 using this function allows me to just grab a random object from my array
_.sample(characterList)

// 9 this function lets me know how many objects are in my array
_.size(characterList)

// 10 this function allows me to grab the first element (last element) in my array
_.first(characterList)

// 11 this function allows me to grab every element in my array that wasn't the last entry
_.initial(characterList)

// 12 this one allows me to essentially grab the origional element that was put into my array
_.last(characterList)

// 13 this one seems very interesting the ability to create a new array from a current array while exclude certain criteria seems like it could be super helpful 
_.without(characterList, talon)

// 14 like in class I can really see a use for this one. the ability to find a particluar index of an element in an array seems to be much faster and could be used as an identifier
_.indexOf(characterList, sarah)

// 15 this one may be geeky but the ability to create an array of sequential numbers with this simple of a command has to be useful
_.range(50)

// 16 I'm not really sure on how this works. I would've expected it to return talon,sarah,aaron which are the names of the var I created that were put into the array
_.keys(characterList)

// 17 this seems pretty awesome for that dice game I was building lol
_.random(1,6)

// 18 seems like another look up function that works from anywhere
_.result(talon,'name')

// 19 not sure when I'd use this but looks interesting
_.pairs(talon)

// 20 YAY done this is a really weird one but I'm getting bored and want to work on something cool
_.invert(talon)