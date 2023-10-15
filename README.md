# testTask for Effect Mobile
Этот проект был разработан в рамках выполнения тестового задания Effect Mobile.

## Установка

1. Склонируйте репозиторий с проектом:https://github.com/RaiymbekAmantayev/testTask


## Запуск

Запустите приложение:


## Структура проекта

- `models/`: Модели для базы данных.
- `Controller/`: Контроллеры для обработки запросов.
- `routers/`: Роутеры для маршрутизации запросов.
- `server.js`: Основной файл приложения.
- `config/`: Конфигурационные настройки.
- `package.json`: Описание проекта и зависимости.
- `README.md`: Документация проекта.

## Использование

// регистрация, создания нового пользователя
http://localhost:3001/api/users/auth/login

// Войти
http://localhost:3001/api/users/auth/login

// Получить всех пользователей
http://localhost:3001/api/users/auth/getall

 //изменение юзернейм пользователя
http://localhost:3001/api/users/auth/update/:id

// изменение пароля(только текущий пользователь может изменить свой пароль)
http://localhost:3001/api/users/auth/update

// Создание действия
http://localhost:3001/api/actions/add

// Получение истории действий с фильтрами
http://localhost:3001/api/actions/history?userId=2&page=1&pageSize=10

## Заметки
Эта задача была разработана  с помощью таких инструментов как node.js с использованием фреймворка express.js, orm системы sequelize, а так же в качестве баз данных был использован mysql

## Авторы

- Имя Автора (@RaiymbekAmantayev)



