//its a linear data structure.
//how to create array
var dataa=[] //this will be empty array //or 
var data1= new aaray()
//how to know length of the arra
console.log(dataa.length)
//-----------------------------

var studentRollNumber=[1,2,3,4,6,8,10]
// to check the lenght of the array
console.log(studentRollNumber.length)

//to find the index assigned array storage i.e on 6th position what is in array list
console.log(studentRollNumber[6])

//other data types in arra
var mixArray=["Rasika","sonavane",false,12,8149291293,"pen","maharashtra","India",undefined,{}]
console.log(mixArray.lenght)
//to add data into 50th index
mixArray[50]="Indian"
console.log(mixArray[50])

//you can call direct array name into the console to show all the data of array
console.log(mixArray)

//if you try to set the length then it will impact on the original lenght, rest of the data will be delete
mixArray.length=3
console.log(mixArray)
// now the data after index 3 got deleted

//now we can add more data 
mixArray.length=20
console.log(mixArray)
//now three index we have alloted data in output remaining places will be as 17 empty items

//to make changes in the existing index
mixArray[0]="miss"
console.log(mixArray)



