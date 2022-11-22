#🌟 DAILY CHALLENGE
# Using the input function, ask the user for a string. The string must be 10 characters long.
import random
sentence = input("Enter sentence with 10 characters long: ")

# If it’s less than 10 characters, print a message which states “string not long enough”.

if (len(sentence) <10 ):

    print("string not long enough")



# if len(sentance) == 10:

#     for x in range(11):

#         print(sentance[0:x])

#         lsentance=list(sentance)

#         random.shuffle(lsentance)

#     print(("Randomised: ")+ "".join(lsentance))

# elif len(sentance)>10:

#     print ("String too long")

# elif len(sentance)<10:

#     print ("String too short")

# If it’s more than 10 characters, print a message which states “string too long”.
elif (len(sentence)>10) :

    print("string too long")

# Then, print the first and last characters of the given text.

    print(sentence[0])

    print(sentence[-1])

# y
# Using a for loop, construct the string character by character: Print the first character, then the second, then the third, until the full string is printed. For example:
# The user enters "Hello World"
# Then, you have to construct the string character by character
# H
# He
# # Hel
# # ... etc
# # Hello World

disp_str = ""

for i in sentence :

    disp_str += i

    print(disp_str)



# # 4. Bonus: Swap some characters around then print the newly jumbled string (hint: look into the shuffle method). For example:
# # Hlrolelwod
#random.shuffle(disp_str)
# # print(("Randomised: ")+ "".join(lsentance))