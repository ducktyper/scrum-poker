# Scrum Poker
Scrum planning tool
http://scrum-poker.ducktyper.co.nz/

# Deploy

## Setup sub domain (scrum-poker.ducktyper.co.nz)
Type: CNAME, Name: scrum-poker, Value: @

## Setup vps (Ubuntu 16.04.1 LTS)
sudo apt-get install nginx
sudo vim /etc/nginx/sites-available/scrum-poker
```
server {
  root /var/www/scrum-poker;
    server_name scrum-poker.ducktyper.co.nz;

    location / {
    try_files $uri $uri/ =404;
  }
}
```
sudo ln -s /etc/nginx/sites-available/scrum-poker /etc/nginx/sites-enabled/
sudo mkdir /var/www/scrum-poker
sudo chown [username] /var/www/scrum-poker
sudo service nginx start

## Build and deploy
npm run deploy:prod
cd dist && tar cf - ./ | ssh [username]@ducktyper.co.nz "tar xf - -C /var/www/scrum-poker" --exclude=*.DS_Store

