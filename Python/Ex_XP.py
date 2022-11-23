# 🌟 Exercise 1 : Set
# Create a set called my_fav_numbers with all your favorites numbers.

my_fav_numbers = {12, 24, 90, 23, 32}

# Add two new numbers to the set.
my_fav_numbers.update([25, 8])

# # print(my_fav_numbers + additional_numbers)
# print(my_fav_numbers)


# Remove the last number

my_fav_numbers.pop()

my_fav_numbers.remove("")

print(my_fav_numbers)

# Create a set called friend_fav_numbers with your friend’s favorites numbers.

friend_fav_numbers = {5, 4, 3, 2, 1}

#Concatenate my_fav_numbers and friend_fav_numbers to a new variable called our_fav_numbers.

our_fav_numbers = my_fav_numbers.union(friend_fav_numbers)
print(our_fav_numbers)


# 🌟 Exercise 2: Tuple
# Given a tuple which value is integers, is it possible to add more integers to the tuple?



# 🌟 Exercise 3: List

# Using this list basket = ["Banana", "Apples", "Oranges", "Blueberries"];
fruit_list = ["Banana", "Apples", "Oranges", "Blueberries"];

# Remove “Banana” from the list.

fruit_list.remove("Banana")

# Remove “Blueberries” from the list.

fruit_list.remove("Bluberries")


# Add “Kiwi” to the end of the list.
fruit_list.append("Kiwi")
print(fruit_list)

# Add “Apples” to the beginning of the list.

fruit_list.insert(0, "Apples")


# Count how many apples are in the basket.

fruit_list.count("Apples")
# Empty the basket.
del fruit_list

# Print(basket)
print(fruit_list)



# 🌟 Exercise 4: Floats
# Recap – What is a float? What is the difference between an integer and a float?

# integer --
# float -- 

# Can you think of another way to generate a sequence of floats?
# Create a list containing the following sequence 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 (don’t hard-code the sequence).


# 🌟 Exercise 5: For Loop
# Use a for loop to print all numbers from 1 to 20, inclusive.
num = 1
while num <= 20:
    print(num, end='  ')
    num += 1

#Exercise 5

# for i in range(1,21):

#     print(i,end=" ")

    if (num%2 == 0 ):

        print(num)

# Using a for loop, that loops from 1 to 20(inclusive), print out every element which has an even index.


#Ex 6
my_name = "Lou"
user_name=input("Guess my name: ")
while user_name!=my_name:
     user_name=input("Guess again: ")

print("Success!")


#Ex7

fruits = input("Enter your Favorite fruit: ")
fruitlist = fruits.split(" ")
newfruit = input("Enter a Fruit: ")
if newfruit in fruitlist:
     print("You chose one of your favorite fruits! Enjoy!")
    
else:
 print("You chose a new fruit. I hope you enjoy.")
 
#Ex8

toppings =[]
total = 10.00
topping = input("Enter a pizza topping: ")
while topping != "quit":
     print(f"I'll put {topping} on your pizza")
     toppings.append(topping)
     topping = input("Enter another topping: ")
for topping in toppings:
     total +=2.5
     print(topping)
print(f'Total: {total}')



#Ex9
ages =input("enter the age of everyone: ")
total = 0
ageslist = ages.split(" ")
for age in ageslist:
     a=int(age)
     if 3<= a <=12:
         total += 10
     elif a > 12:
         total+=15  
     else: 
         pass   
print(f'Total: ${total}')

names = input("Whats your name? ")
permitted_list =[]
while names != "done":
     age= int(input("How old are you? "))
     if 16<age<21:
         permitted_list.append(names)
         names = input("You are not allowed,(Type done when finished) ")
     else:
         names = input("Whats your name? (Type done when finished) ")
        
print(f'{", ".join(permitted_list)} can enter')

#Ex10
sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
finished_sandwiches=[]
# for sandwich in sandwich_orders:
finished_sandwiches.append(sandwich_orders)
# for sandwich in finished_sandwiches:
print(f'I made your {sandwich_orders} sandwitch')

sandwich_orders = ["Tuna sandwich", "Avocado sandwich", "Egg sandwich", "Sabih sandwich", "Pastrami sandwich"]
sandwich_orders.remove("Pastrami sandwich")
print(sandwich_orders)

#EXGOLD
# Ex 1

li1 = [1,2,3,4,5]
li2 = [6,7,8,9]
for i in li2:
     li1.append(i)
print(li1)

joint_ist = [*li1,*li2]

print (joint_ist)


#Ex 3
name = input("Whats your name? ")
names = ['Samus', 'Cortana', 'V', 'Link', 'Mario', 'Cortana', 'Samus']
if name in names:
     print(names.index(name))
else:
     print('Name not in list.')

#Ex 4
number = []
number.append(input("Input the 1st number: "))
number.append(input("Input the 2nd number: "))
number.append(input("Input the 3rd number: "))

print(f'The greatest number is: {max(number)}')

#Ex 5
string ='abcdefghijklmnopqrstuvwxyz'
vowels = ['a','e','i','o','u']
for i in string:
     if i in vowels:
         print('Vowel')
     else:
         print('Constanet')

#Ex 6
word_list=[]
count= 0 
while count<7:
    word_list.append(input('Enter a word: '))
count +=1
letter = input("Enter a letter: ")
for word in word_list:
     if letter in word:
         print(f'Index of "{letter}" in "{word}" is {word.index(letter)}')
     else:
         print(f'Sorry "{letter}" is not in "{word}"')

#EX7
 
number_list=[]

for number in range(0,10000001):
     number_list.append(number)

print(min(number_list))
print(max(number_list))

#Ex8

string = input("Enter a list of numbers sperated by a comma: ")
li = string.split(",")
tup = tuple(li)

print(li)
print(tup)

#Ex 9
import random

flag = True
win = 0 
loss = 0 
while flag is True:
    user_num = input("Enter a number between 0-9 or q to quit:")
    comp_num = random.randint(0,9)
    if user_num =='q':
        flag = False
    elif int(user_num) == comp_num:
        win+=1
        print('Winner!!')
        print(comp_num)
    else:
        loss+=1
        print(comp_num)
        print('Lost')
    

print(f'Wins: {win}')
print(f'Losses: {loss}')

#Ex Ninja
#Ex 1
import math
nums = input('Enter numbers seperated by commas: ')

nums_list = nums.split(",")
print(nums_list)

for number in nums_list:
     x = math.sqrt((2*50*int(number))/30)
     print(x)

#Ex 2


li = [3, 47, 99, -80, 22, 97, 54, -23, 5, 7] 
li2 =[]
li_50 =[]
li_10 =[]
li_sq =[]
li_nodub =[]
print(li)
print(sorted(li))
sum_li = sum(li)
print(sum_li)

li2.append(li[0])
li2.append(li[-1])
print(li2)

for i in li:
     if i > 50:
         li_50.append(i)
print(li_50)

for i in li:
     if i < 10:
         li_10.append(i)
print(li_10)

for i in li:
     li_sq.append(i*i)
print(li_sq)

li_set = set(li)
for i in li_set:
     li_nodub.append(i)
print(li_nodub)
print(len(li_nodub))

average = sum_li/len(li)
print(f'Average: {average}')

print(max(li))
print(min(li))

#Daily Challenge
# Challenge 1
number = int(input("Enter a number "))
length = int(input("Enter length "))

def multiples(number, length):

    l = []

    for i in range(1, length+1):

        l.append(number*i)

    return l

print(multiples(number, length))

import string

text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et mauris lacus. Proin interdum, diam suscipit congue pretium, velit velit tristique turpis, eu tristique augue nibh in nisl. Donec dui sapien, laoreet a risus vitae, bibendum sollicitudin eros. Duis quis justo et urna sollicitudin tempus pellentesque ac quam. Fusce tempus arcu ac augue mollis imperdiet. Curabitur quis tincidunt lorem. Donec quis eros vitae ex venenatis posuere ac id massa. Morbi non nibh vel lorem hendrerit mattis ac a nisi. Proin accumsan lacus at accumsan sollicitudin. Duis congue faucibus ante, molestie porta elit imperdiet id. Vestibulum commodo turpis nunc. Sed molestie tempor tincidunt. Donec eu scelerisque felis. Cras sit amet scelerisque mauris, at mattis leo. Donec cursus risus et iaculis ornare. Integer tempor porta sollicitudin. Nam mattis tincidunt mi, ac tincidunt diam porttitor eu. Pellentesque viverra, neque ac lobortis suscipit, ante magna malesuada nisl, vel maximus purus quam et dui. Morbi mattis felis eu sem volutpat, eu sodales justo semper. Donec a urna tortor. Donec sagittis turpis sem, vel faucibus nunc viverra id. Curabitur sit amet elit enim."
text_nopunc =""
print(f'There are {len(text)} in the text.')

sen = text.split('. ')
print(f'There are {len(sen)} sentances in the text.')

words = text.split(" ")
print(f'There are {len(words)} words in the text.')


for i in text:
     if i not in string.punctuation:
         text_nopunc+=i.lower()

text_nopunc_list = text_nopunc.split(" ")

unique_counter = 0
for i in text_nopunc_list:
     if text_nopunc_list.count(i)==1:
         print(i)
         unique_counter+=1


print(f'There are {unique_counter} unique words in the text')

counter = 0
for i in text:
     if i != " ":
         counter +=1

print(f'There are {counter} non white-space charecters in the list')

sen_len =[]
for i in sen:
    x = i.split(" ")
sen_len.append(len(x))

average = sum(sen_len)/len(sen_len)
print(f'There are average of {average} words in each sentance.')

non_unique_counter = 0
for i in text_nopunc_list:
     if text_nopunc_list.count(i)>1:
         non_unique_counter+=1


print(f'There are {non_unique_counter} non unique words in the text')

#Ex4

str = 'New to Python or choosing between Python 2 and Python 3? Read Python 2 or Python 3.'

str_ls = str.split(' ')
str_set = set(str_ls)

for i in str_set:
     print(f'{i}: {str_ls.count(i)}')


# Chellenge 2
string = str(input("write a string"))

string = str(input("Enter string "))

p=""

for char in string:

    if char not in p:

        p=p+char

print(p)


#Daily Challenge Gold
from datetime import date
import calendar
date_of_birth=input("Enter your birth date: (dd/mm/yyyy)")

dob = date_of_birth.split("/")
year=int(dob[2])
month=int(dob[1])
day=int(dob[0])

cdate = date.today()
brithdate = date(year,month,day)
diff = cdate - brithdate
age = int(diff.days/365)


agestr=str(age)
num=agestr[-1]
num=int(num)


print(age)

print("    "+"-"*int((11-num)/2)+"i"*num+"-"*int((11-num)/2))
print("   |:H:a:p:p:y:|")
print(" __|___________|__")
print("|^^^^^^^^^^^^^^^^^|")
print("|:B:i:r:t:h:d:a:y:|")
print("|                 |")
print("~~~~~~~~~~~~~~~~~~~")

import calendar
if calendar.isleap(year)==True:
    print("    "+"-"*int((11-num)/2)+"i"*num+"-"*int((11-num)/2))
    print("   |:H:a:p:p:y:|")
    print(" __|___________|__")
    print("|^^^^^^^^^^^^^^^^^|")
    print("|:B:i:r:t:h:d:a:y:|")
    print("|                 |")
    print("~~~~~~~~~~~~~~~~~~~")