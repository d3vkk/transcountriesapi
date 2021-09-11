import requests
import json
from bs4 import BeautifulSoup

data  = requests.get('https://www.countrycode.org/')
soup = BeautifulSoup(data.text, 'html.parser')

data = []
for div in soup.find_all('div', {'class': 'visible-sm visible-xs'}):
    for tr in div.find_all('tr'):
        # Extract text in td tags
        # converting each to an array
        values = [td.text for td in tr.find_all('td')]
        # Place all the arrays in one big array
        data.append(values)

# print(data)

# Convert big array to JSON format & output it
print(json.dumps(data))
