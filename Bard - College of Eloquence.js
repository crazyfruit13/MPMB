/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://www.patreon.com/morepurplemorebetter
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Bard, called "College of Eloquence"
	Code by:	Jonathan Matson
	Date:		2018-9-19 (sheet v13.000BETA8)
*/

var iFileName = "Bard - College of Eloquence [by Jonathan Matson].js";
RequiredSheetVersion(12.999);

SourceList["EH"] = {
	name : "EloquentHeroics",
	abbreviation : "EH",
	group : "Unearthed Arcana",
	url : "https://media.wizards.com/2019/dnd/downloads/UA-EloquentHeroics.pdf",
	date : "2019/9/19"
};

AddSubClass("bard", "college of	eloquence", {
	regExpSearch : /^(?=.*college)(?=.*eloquence).*$/i,
	subname : "College of Eloquence",
	source : ["EH", 1],
	features : {
		"subclassfeature3" : {
			name : "Universal Speech",
			source : ["EH", 1],
			minlevel : 3,
			description : "\n   " + "You have gained the ability to speak and reason with any creature. As a bonus action, you can expend one of your uses of Bardic Inspiration. When you do so, roll your Bardic Inspiration die, and choose a number of creatures within 60 feet of you that you can see equal to the roll. For 10 minutes, the chosen creatures can magically understand you, regardless of the language you speak, and you have advantage on Charisma checks made to influence them. This feature works even on a creature that doesn’t speak any languages.  ",
			recovery : "long rest",
			action : ["bonus", ""],
		},
		"subclassfeature3.1" : {
			name : "Soothing Words",
			source : ["EH", 1],
			minlevel : 3,
			description : "\n   " + "You can now cast calm emotions without expending a spell slot. You can use this feature a number of times equal to your Charisma modifier. You regain all expended uses of this feature when you finish a long rest.",
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
			recovery : "long rest",
			action : ["action", ""],
			spellcastingBonus : [{
				name : "Soothing Words (Calm Emotions)",
				spells : ["calm emotions"],
				selection : ["calm emotions"],
			}]
		},
		"subclassfeature6" : {
			name : "Undeniable Logic",
			source : ["EH", 1],
			minlevel : 6,
			description : "\n   " + "You can spin words	laced with magic into a knot of reasoning that can be encouraging or impossible to follow."+
			" As a bonus action, you can expend one of your uses of Bardic Inspiration. When you do so, choose a creature you can see within 60 of you that can hear you, then roll your Bardic Inspiration die and choose one of the following:"+
			" The creature takes psychic damage equal to the number you roll on the Bardic Inspiration die, and the creature must succeed on an Intelligence saving throw against your spell save DC or have disadvantage on the next saving throw it makes before the end of your next turn."+
			" The creature regains hit points equal to the number you roll on the Bardic Inspiration die, and the creature has advantage on the next saving throw it makes before the end of your next turn. ",
			action : ["bonus", ""],
		},
		"subclassfeature14" : {
			name : "Infectious Inspiration",
			source : ["EH", 1],
			minlevel : 14,
			description : "\n   " + "When a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or	saving throw and the roll fails, the creature can keep the Bardic Inspiration die."+ 
			" In addition, when a creature adds one of your Bardic Inspiration dice to its ability check, attack roll, or saving throw and the roll succeeds, you can use your reaction to encourage a different creature (other than yourself) that can hear you within 60 feet of you, giving it a Bardic Inspiration die without expending any of your Bardic Inspiration uses."+ 
			" You can use this reaction a number of times equal to your Charisma modifier (minimum of once), and you regain all expended uses when you finish a long rest.",
			usages : "Charisma mod per ",
			usagescalc : "event.value = Math.max(1, tDoc.getField('Cha Mod').value);",
			recovery : "long rest",
			action : ["reaction", ""],
		}
	}
});
