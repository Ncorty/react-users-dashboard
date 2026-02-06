# react-users-dashboard
Учебный проект дашборда с авторизацией
## Возможности

- Авторизация (демо-логин/пароль).
- Список пользователей.
- Создание и редактирование пользователей через модальные окна.
- Удаление пользователей.

## Стек

- Webpack
- React 16
- Ant design 5 и styled-components
- React router 6
- TanStack Query 4 + axios
- dayjs
- Git (github.com)


## Требования

- Node.js 18+
- npm

## Установка и запуск

```bash
npm install
```

Создайте файл `.env` в корне проекта и укажите адрес API как указанр в `.env.example`

Запуск в режиме разработки:

```bash
npm run start
```

Сборка:

```bash
npm run build:dev
npm run build:prod
```

## Авторизация

Для входа используйте демо-учетные данные:

- Логин: `admin`
- Пароль: `admin`

## Структура проекта

Архитектура FSD (Feature-Sliced Design)
```
src/
  app/           # точка входа приложения и роутинг
  entities/      # доменные сущности
  features/      # бизнес-фичи (авторизация, создание/редактирование пользователя)
  pages/         # страницы (login, users, not-found)
  shared/        # общие утилиты и UI
```

## API

Приложение ожидает REST API по адресу из `REACT_APP_API_BASE_URL` со следующими эндпоинтами:

- `GET /users` — получить список пользователей
- `POST /users` — создать пользователя
- `PUT /users/:id` — обновить пользователя
- `DELETE /users/:id` — удалить пользователя
