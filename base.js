var app = angular.module('PFCSapp', []);



app.controller('CharacterStats', ['$scope', function($scope) {
	$scope.stats = {
		"Strength": 10,
		"Dexterity": 10,
		"Constitution": 10,
		"Intelligence": 10,
		"Wisdom": 10,
		"Charisma": 10,

		"BaseAttackBonus": 0,
		"BaseFort": 0,
		"BaseRef": 0,
		"BaseWill": 0,
		"SizeMod": 0,

		"ArmorBonus": 0,
		"ShieldBonus": 0,
		"NaturalArmor": 0,
		"Deflection": 0,


		"MiscStrength": 0,
		"MiscDexterity": 0,
		"MiscConstitution": 0,
		"MiscIntelligence": 0,
		"MiscWisdom": 0,
		"MiscCharisma": 0,

		"MiscArmor": 0,
		"MiscFort": 0,
		"MiscRef": 0,
		"MiscWill": 0,
		"MiscCMD": 0
		};

	$scope.Skillscope = skillsList;
	$scope.ClassScope = class_data;
	console.log($scope.stats[skillsList.Acrobatics]);
	console.log(class_data.Druid[17].BaseWill);
	// $scope.ModValue = $scope.stats[skillsList.Skills.ModType];

	$scope.Math = window.Math;

	$scope.getModifier = function(stat){
			return Math.floor((stat-10)/2);
	};
	$scope.getMiscStatMod = function(stat){
		return Math.floor(stat/2);
	}
	$scope.hello = function(name){
		return "hi "+name;
	};

	$scope.ClassSelect = function(){

	}



		$scope.skillsPoints = {
		"Acrobatics": 0,
		"Appraise": 0,
		"Bluff": 0,
		"Climb": 0,
		"Craft": 0,
		"Craft": 0,
		"Craft": 0,
		"Diplomacy": 0,
		"Disable Device*": 0,
		"Disguise": 0,
		"Escape Artist": 0,
		"Fly": 0,
		"Handle Animal*": 0,
		"Heal": 0,
		"Intimidate": 0,
		"Knowledge (Arcana)*": 0,
		"Knowledge (Dungeoneering)*": 0,
		"Knowledge (Engineering)*": 0,
		"Knowledge (Geography)*": 0,
		"Knowledge (History)*": 0,
		"Knowledge (Local)*": 0,
		"Knowledge (Nature)*": 0,
		"Knowledge (Nobility)*": 0,
		"Knowledge (Planes)*": 0,
		"Knowledge (Religion)*": 0,
		"Linguistics*": 0,
		"Perception": 0,
		"Perform": 0,
		"Perform": 0,
		"Profession*": 0,
		"Profession*": 0,
		"Ride": 0, 
		"Sense Motive": 0,
		"Sleight of Hand*": 0,
		"Spellcraft*": 0,
		"Stealth": 0,
		"Survival": 0,
		"Swim": 0,
		"Use Magic Device*": 0,
	};


}]);