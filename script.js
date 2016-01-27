
 //function revString()
 //{
 //    	revstr="";
 //     inputstring=document.getElementById("text").value;
 //	l=inputstring.length;

 //	for(var k=l;k>=0;k--)
 //		{
 //		revstr = revstr + inputstring.charAt(k);
 //   	}
 //   	//alert(revstr);
 //		document.getElementById("Output").innerHTML = "Reversed String is : "+ revstr	;
 //}

var myApp = angular.module('myApp', []);
myApp.controller('appController', ['$scope', function ($scope) {
    $scope.inputString = "";
    $scope.revstr = function (inputvalue) {
        $scope.opString = "";
        $scope.strLen = inputvalue.length;
        for (var k = $scope.strLen; k >= 0; k--) {
            $scope.opString = $scope.opString + inputvalue.charAt(k);
        }
        if (inputvalue == $scope.opString & inputvalue != "")
        {
            //return "palindrome";
            $scope.palindrome = 'String is a palindrome';
        }
        else {
            $scope.palindrome = "";
        }
        return "Reversed String is: " + $scope.opString;
    };
}]);