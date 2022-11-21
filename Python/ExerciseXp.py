#Exercise XP


# 🌟Exercise 1 : Hello World
#print("Hello world, Hello world,Hello world,Hello world ")

print("Hello World\n" *4,end="")

#🌟Exercise 2 : Some Math
# Write code that calculates the result of: (99^3) * 8 (99 to the power of 3 times 8)

#3**3 --  3 to the power of 3 -- ** mean to the power
power = 99**3
print(power* 8)

#🌟Exercise 3 : What Is The Output ?

#>>> 5 < 3 - False

#>>> 3 == 3 - True

#>>> 3 == "3" - False

#>>> "3" > 3 - False

#>>> "Hello" == "hello" - False


# 🌟 Exercise 4 : Your Computer Brand
# Create a variable called computer_brand which value is the brand name of your computer.

computer_brand = "HP"

# Using the computer_brand variable print a sentence that states the following: "I have a <computer_brand> computer".

print(f"I have an {computer_brand} computer")



# 🌟 Exercise 5 : Your Information

# Create a variable called name, and set it’s value to your name.
name = "Lou"

# Create a variable called age, and set it’s value to your age.
age = 23

# Create a variable called shoe_size, and set it’s value to your shoe size.
shoe_size = 39

# Create a variable called info and set it’s value to an interesting sentence about yourself. The sentence must contain all the variables created in parts 1, 2 and 3.

info =  f"My name is {name}, I am {age} and my shoe size is {shoe_size}"

print(info)


# 🌟 Exercise 6 : A & B

# Create two variables, a and b.

a = 23
b = 12
# Each variable value should be a number.
# If a is bigger then b, have your code print Hello World.

if (a > b):
    print("Hello World")



# Exercise 7 : Odd Or Even
# Write code that asks the user for a number and determines whether this number is odd or even.

num = int(input("please enter a number to check if it's odd or even "))

if(num%2)==0:
    print("The number is even ")

else:
    print("the number is odd")


# 🌟 Exercise 8 : What’s Your Name ?

# Write code that asks the user for their name and 
name = (input("please enter your name: "))

# determines whether or not you have the same name, print out a funny message based on the outcome
#other_name = "Loub"

other_name = (input("please enter your other name: "))
if (other_name == name):
    print("We have the same name")

elif (other_name != name):
    print("Not same")

# else:
#     print("Not same")



# 🌟 Exercise 9 : Tall Enough To Ride A Roller Coaster
# Write code that will ask the user for their height in inches.
height = int(input("please enter your height in inches: "))

# If they are over 145cm print a message that states they are tall enough to ride.
cm = height * 2.54
if (cm > 145):

    print("you are tall enough to ride")

# If they are not tall enough print a message that says they need to grow some more to ride.
else:
    print("you need to grow some more to ride")