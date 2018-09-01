#############################################
#         PERFECT STAY 
#############################################


# CONFIGURATION

# START LOCAL SERVER

- yarn start 
- http://localhost:3000/

# DEPLOY AWS LAMBDA DEV

- installer python et aws cli
 
- configurer dans .aws/credentials le profile AWS devProfile

Dans le fichier credentials rajouter :

[default]
aws_access_key_id = XXXXXXX
aws_secret_access_key = XXXXXX

- Pour deployer sur l'environnement AWS de dev
    - installer node js et serverless : npm install -g serverless
    - configurer le fichier serverless.yml à la racine du project
    - rajouter le répertoire .serverless dans gitignore
    - lancer la commande   : serverless deploy 

# LIVRAISON/CONFIGURATION PRODUCTION 


