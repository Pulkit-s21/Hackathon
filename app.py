import phonenumbers
import sys
from phonenumbers import geocoder
from opencage.geocoder import OpenCageGeocode


# * taking input the phonenumber along with the country code
number = input("Enter the PhoneNumber with the country code : ")

# * Parsing the phonenumber string to convert it into phonenumber format
phoneNumber = phonenumbers.parse(number)

print(f"{phoneNumber}")

# * Storing the API Key in the Key variable

# * Using the geocoder module of phonenumbers to print the Location in console
yourLocation = geocoder.description_for_number(phoneNumber,"en")
print(f"{phoneNumber}")

print(f"Location: {yourLocation}")

# * Using opencage to get the latitude and longitude of the location
geocoder = OpenCageGeocode("e262d8a9fc864d4c85f5e7639c58c227")
query = str(yourLocation)
results = geocoder.geocode(query)

# * Assigning the latitude and longitude values to the lat and lng variables
lat = results[0]['geometry']['lat']
lng = results[0]['geometry']['lng']

print(f"{lat} {lng}")

import json

sys.stdout = open('declare.js','w')

jsonlat = json.dumps(lat)
jsonlng = json.dumps(lng)

print(f"var jsonlat = '{jsonlat}'")
print(f"var jsonlng = '{jsonlng}'")