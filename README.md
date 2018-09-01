#############################################
# START LOCAL SERVER

- yarn start 
- install dependency : yarn 
- http://localhost:3000/
- deploy aws : yarn deploy
- deploy offline : yarn offline
# DEPLOY AWS LAMBDA DEV

- installer python et aws cli
 
- configurer dans .aws/credentials le profile AWS devProfile

Dans le fichier credentials rajouter :

[default]
aws_access_key_id = XXXXXXX
aws_secret_access_key = XXXXXX



