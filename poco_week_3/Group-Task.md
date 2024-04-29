1. Input: Enter integer numbers from 0 to 99 using space separator between them
userInputStr = "17 32 45 12 78 90";
2. Split these numbers to array arr
userInputArr = userInputStr.split(" ");
# Expected result [17,32,45,12,18,78,90]
3. Change the datatype of the elements in userInputArr array to int numbers
4. Create array listOfBuckets with 10 empty arrays (buckets) inside
5. Loop for (i = 0, i < userInputArr.len, i++){
        x = int(userInputArr[i]/10);
        listOfBuckets[x].push(userInputArr[i]);
}
# ListOfBuckets loop looks like
[[ ],[17],[ ],[],[],[ ],[ ],[],[ ],[]]
[[ ],[17],[ ],[32],[],[ ],[ ],[],[ ],[]]
[[ ],[17],[ ],[32],[45],[ ],[ ],[],[ ],[]]
[[ ],[17,12],[ ],[32],[45],[ ],[ ],[],[],[]]
[[ ],[17,12,18],[ ],[32],[45],[ ],[ ],[],[ ],[]]
[[ ],[17,12,18],[ ],[32],[45],[ ],[ ],[78],[ ],[]]
[[ ],[17,12,18],[ ],[32],[45],[ ],[ ],[78],[ ],[90]]

6. Now we need to sort numbers inside every bucket. You can use any other sorting algorithm, for example: 
Loop for (y = 0, y < listOfBuckets.len, y++){
# y=1 listOfBuckets[y] => [17,12,18]
    loop for(m = 0, m < listOfBuckets[y].len, m++ ){
        loop for(n = m+1, n < listOfBuckets[m].len, n++ ){
            if (listOfBuckets[m]>listOfBuckets[n]){
                c = listOfBuckets[m];
                listOfBuckets[m] = listOfBuckets[n];
            }
        }
    }
}
[[ ],[12,17,18],[ ],[32],[45],[ ],[ ],[78],[ ],[90]]
7. Print listOfBuckets sorted results (using man, join methods)
resultsList = listOfBuckets.map(row => row.join(' ')).join(' ');
console.log(resultsList);

Expected output: "12 17 18 32 45 78 90"

