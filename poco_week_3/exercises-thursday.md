# Exercise 1 #
Allow the user to input digits, afterwards sort and print them in numerical order.

1. Numbers input
2. 

# Exercise 2 #
Allow the user to input numbers, add them and print the result.
1. Promt numbers input
2. a + b
3. Print result

# Exercise 3 # 
Allow the user to input numbers, substract the smaller from the bigger number and print the result.
1.  Numbers input
2.  if a > b then print a-b
    else print b-a

# Exercise 4 #
Combine exercise 2 + 3, let the user choose which math operation to do.
1.  Numbers input
2.  Ask what operation to do
3.  if sum then do steps of ex2
    else do the steps of ex 3

# Exercise 5 #
Find the day of the year for the given date. For example, January 1st would be 1, and December 31st is 365.
1.  create array with the numbers of days in every month M = [31,28,31,30,31,30,31,31,30,31,30,31]
2.  get the date (for example 18.4) => [18, 4]
3.  to find the day of the year we need to take days (18) plus the sum of the numbers in our array from the first one until the M[month-1] if index starts from 0: sum(M(0:month-1))
4.  print the total sum
