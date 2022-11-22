#Exercise Gold

#🌟 Exercise 1 : Hello World-I Love Python

print("Hello World\n"*4+"I love python\n"*4)


# 🌟 Exercise 2 : What Is The Season ?
# Ask the user to input a month (1 to 12).
month=input("Enter a Month: ")

# Display the season of the month received :
imonth=int(month)

# Spring runs from March (3) to May (5)
if 3 <=imonth <=5:

    print("Spring")

# Summer runs from June (6) to August (8)
elif 6 <=imonth <=8:

    print("Summer")

# Autumn runs from September (9) to November (11)
elif 9 <=imonth <=11:

    print("Autumn")

# Winter runs from December (12) to February (2)
elif 12 ==imonth or 1<= imonth<=2:

    print("Winter")

elif imonth> 12:

    print("Error")