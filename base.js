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
	
	// $scope.ModValue = $scope.stats[skillsList.Skills.ModType];
	$scope.Ranger5 =  class_data;
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

	$scope.updateClassLevel = function(key, level){
		// return Ranger5.key[level].BaseAttackBonus;
		$scope.BaseAttackBonus = $scope.BaseAttackBonus || {};
		// console.log(key,level);
		// console.log("BaseAttackBonus", class_data[key][level].BaseAttackBonus);
		$scope.BaseAttackBonus[key] = class_data[key][level].BaseAttackBonus;
		// console.log("$scope.BaseAttackBonus ", $scope.BaseAttackBonus);
		// return Ranger5.key[level].BaseAttackBonus;
		$scope.TotalBaseAttackBonus = 0;
		for (var k in $scope.BaseAttackBonus) {
			console.log(Object.prototype.toString.call($scope.BaseAttackBonus[k]));
			if (Object.prototype.toString.call($scope.BaseAttackBonus[k]) === '[object Array]'){
				$scope.TotalBaseAttackBonus += $scope.BaseAttackBonus[k][0];
				console.log($scope.BaseAttackBonus[k][0]);
			} else {$scope.TotalBaseAttackBonus += $scope.BaseAttackBonus[k];}

		}

		$scope.BaseFort = $scope.BaseFort || {};
		// console.log(key,level);
		// console.log("BaseFort", class_data[key][level].BaseFort);
		$scope.BaseFort[key] = class_data[key][level].BaseFort;
		// console.log("$scope.BaseFort ", $scope.BaseFort);
		// return Ranger5.key[level].BaseFort;
		$scope.TotalBaseFort = 0;
		for (var key in $scope.BaseFort) {
			$scope.TotalBaseFort += $scope.BaseFort[key];
		}

		$scope.BaseRef = $scope.BaseRef || {};
		// console.log(key,level);
		// console.log("BaseRef", class_data[key][level].BaseRef);
		$scope.BaseRef[key] = class_data[key][level].BaseRef;
		// console.log("$scope.BaseRef ", $scope.BaseRef);
		// return Ranger5.key[level].BaseRef;
		$scope.TotalBaseRef = 0;
		for (var key in $scope.BaseRef) {
			$scope.TotalBaseRef += $scope.BaseRef[key];
		}

		$scope.BaseWill = $scope.BaseWill || {};
		// console.log(key,level);
		// console.log("BaseWill", class_data[key][level].BaseWill);
		$scope.BaseWill[key] = class_data[key][level].BaseWill;
		// console.log("$scope.BaseWill ", $scope.BaseWill);
		// return Ranger5.key[level].BaseWill;
		$scope.TotalBaseWill = 0;
		for (var key in $scope.BaseWill) {
			$scope.TotalBaseWill += $scope.BaseWill[key];
		}


		$scope.ClassSkill = $scope.ClassSkill || {};
		// console.log(key,level);
		// console.log("BaseWill", class_data[key][level].BaseWill);
		$scope.ClassSkill[k] = class_data[k][0];
		// console.log("$scope.ClassSkill ", $scope.ClassSkill);
		// return Ranger5.key[level].ClassSkill;
		$scope.TotalClassSkill = 0;
		for (var key in $scope.ClassSkill) {
			$scope.TotalClassSkill += $scope.ClassSkill[key];
		}
	};

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