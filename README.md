# FIL-ROUGE

## npm install express

## npm install react-redux

## npm install @reduxjs/toolkit

## npm install axios

# 🍎 Docker Section:

# 🍌 back end part

## docker build -t backend .

## docker run -d --rm -p 3000:3000 backend

## npm i cors

# 🍌 Front end part

## docker build -t frontend .

## docker run --rm -d -p 3001:3000 frontend

# 🍎 Add network

## docker network ls

## docker network create jobs-net

## docker run -d --rm -p --network jobs-net backend

## docker run --rm -d --network jobs-net frontend

# 🍎 Docker compose section

## 1\ Build Posgres container

## 2\ Build backend container

## run: docker logs <container name>

## 3\ Build frontend container
