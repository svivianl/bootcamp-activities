# React router

[Training](https://reacttraining.com/react-router/web/example/url-params)

# Progressive web app

[Guides](https://reacttraining.com/react-router/web/guides/quick-start)

# Lecture Notes 

Notes are [here](https://web.compass.lighthouselabs.ca/activities/506/lectures/2618)
Repo is [here](https://github.com/vasiliy-klimkin/w8d5-adv-lec)

Remember if you want to try contacting the mobile web page with `localhost` on your phone, use `ifconfig` to figure out your local ip

Tachyons: CSS toolkit

mobX similar to Redux

Structure:
container
media-livrary

# Setup github

[Guide](https://web.compass.lighthouselabs.ca/activities/289)

## git

delete .git/
git rm -r --cached .

# Setup Postgres

sudo -u postgres -i

```
CREATE USER <username>;
CREATE DATABASE <username>;
ALTER USER <username> WITH Superuser createrole createdb replication;
CREATE USER labber WITH PASSWORD 'labber';
CREATE DATABASE labber OWNER labber;
ALTER USER labber WITH Superuser createrole createdb replication;
```
out of the psql
```
gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash
```
exit terminal and open the terminal again
```
rvm get stable
sudo apt-get install postgresql-client libpq5 libpq-dev
rvm install 2.6.3
sudo apt install pgadmin3
```


# Grommet

Code pen [sandbox](https://codesandbox.io/s/grommetsandbox-h2e6s)
[sandbox](https://codesandbox.io/s/0y2m8754nn)
