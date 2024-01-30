-- Créez la base de données
CREATE DATABASE IF NOT EXISTS testSequelize2;

-- Utilisez la base de données nouvellement créée
USE testSequelize2;

-- Créez un utilisateur
CREATE USER IF NOT EXISTS 'root'@'%' IDENTIFIED BY '';

-- Accordez tous les privilèges à l'utilisateur sur la base de données
GRANT ALL PRIVILEGES ON testSequelize2.* TO 'root'@'%';

-- Rechargez les privilèges pour qu'ils prennent effet
FLUSH PRIVILEGES;
