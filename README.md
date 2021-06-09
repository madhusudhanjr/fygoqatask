# fygoqatask
Fygo QA Task

Goal:

To mock the API testing of Fygo endpoints listed in https://gist.github.com/ogurtsov/2a7e093d6252b7279ecd9f05e4d023e1


# Fygo Api Automation      
Contains mocha javascript tests for api automation of Fygo backend api's    
    
	
## Overview :eyes:    
Solvnow backend api automation tests written in javascript using mocha testing framework.    
 
    
## Requirement / Pre-requisites :eyes:   
- Nodejs    
- npm   
 
    
## Setup :eyes:   
1. Clone the repo  
``` git clone https://github.com/madhusudhanjr/fygoqatask.git ```      
2. Install the dependencies     
``` npm install  # from inside of the fygoqatask directory ```      
    
    
## Execution :eyes:           
To execute test based on pre-defined tasks, run the following command. Please note all the tests get failed as we are running the mock tests     
``` npm test ```      
      
 
## Reporting :eyes:    
- All reports are created in reports directory     
- Reports are created using mochawesome pacjage      
- Reports are created in following 2 formats     
	- html (for easy viewing, can be viewed in any modern browser)     
	- json (for any CI plugin integration if needed)       
    
    
## Misc :eyes:    
NOTE: Above information in more than sufficient for setting up and executing tests. Information below might be helpful for developers and SETs     
      
### 1. Secret files    
As mentioned above, there are main 2 secret file which are mandatory and needed for execution of automated tests.     
a. db.js has database related configuration needed for connecting to the database.    
```      
var db = {
    "sit": {
        "db_hostname": "xxxxxxxx",
        "db_username": "xxxxxxx",
        "db_password": "xxxxxxx",
        "db_port": xxxx,
        "db_schema": "xxxx"
    }
}
exports.config = db;
```     
    
b. auth0.js has secrets to generate auth0 token for a user using the api     
```     
var auth0 = {
    "sit":
    {
        "grant_type": "password",
        "client_id": "xxxxxxxx",
        "client_secret": "xxxxxxxx",
        "audience": "xxxxxxxx",
        "scope": "xxxxxx",
        "username": "",
        "password": "",
    }
}
exports.config = auth0;
```    
      
      
### 2. Coverage     
Following points are taken care when adding tests for a new api     
- Happy path (everything valid)      
- Junk/blank queries (is api has queries)     
- Junk/empty payload (if api has payload, in case of POST or PUT usually)     
- Non-authorized users tokens (advocate token for client api, client token for admin api etc etc)     
- Blank and invalid tokens     
- Other http method types     
      
	  
### 3. Flow     
Usual flow of a happy path tests is following     
a. hooks.js file is execute and tokens are generate    
b. Control enters test    
c. appropriate api call is made    
d. appropriate database call is made    
e. status code of api response is verified    
f. data from api is cross verified with data from database    
    
