# Vue 3 + TypeScript + Vite (Pinia, Vue Router) - Фронтенд для форм

Этот проект представляет собой фронтенд часть мини-приложения, разработанного на **Vue 3 + TypeScript + Vite**. Он включает в себя две формы с валидацией в реальном времени, имитацией отправки данных и страницей для отображения результата.

## Используемые технологии

| Frontend | State Management | Validation | UI / Components |
|---|---|---|---|
| ![Vue 3](https://img.shields.io/badge/Vue.js-35495E?logo=vue.js&logoColor=4FC08D) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white) ![Vue Router](https://img.shields.io/badge/Vue_Router-4FC08D?logo=vue.js&logoColor=white) | ![Pinia](https://img.shields.io/badge/Pinia-FFD859?logo=vue.js&logoColor=4FC08D) | ![Zod](https://img.shields.io/badge/Zod-3E67B1?logo=zod&logoColor=white) ![Custom Validators](https://img.shields.io/badge/Custom_Validators-000000?logo=checkmarx&logoColor=white) | ![TextField](https://img.shields.io/badge/TextField-42B883?logo=vue.js&logoColor=white) ![MaskedPhoneField](https://img.shields.io/badge/MaskedPhoneField-42B883?logo=vue.js&logoColor=white) ![SubmitButton](https://img.shields.io/badge/SubmitButton-42B883?logo=vue.js&logoColor=white) |


## Функциональность

-   **Форма A:** Поля "Имя", "Email", "ИНН", "Телефон".
-   **Форма B:** Поля "Имя", "Фамилия", "Отчество", "Дата рождения", "Логин", "Email".
-   **Валидация в реальном времени:** Поля форм валидируются при вводе и потере фокуса. Кнопка "Отправить" активна только при полностью валидной форме.
-   **Маска телефона:** Поле телефона имеет маску `+7 (XXX) XXX-XX-XX`.
-   **Имитация отправки:** Данные форм отправляются на имитированный сервер (или на внешний бэкенд, если он настроен) с задержкой и случайным успехом/ошибкой.
-   **Страница результата:** При успешной отправке отображает `requestId` и `classifier` из ответа сервера.
-   **Навигация:** Главная страница со ссылками на формы и страницу результата. Кнопки "Главный экран" добавлены на страницы форм и страницу результата.

## Установка

1.  **Перейдите в директорию `vue-forms/`:**
    ```bash
    cd vue-forms
    ```
2.  **Удалите все папки `node_modules` и `package-lock.json`** (это поможет избежать конфликтов зависимостей):
    ```bash
    # Для Windows PowerShell:
    Remove-Item -Path node_modules -Recurse -Force -ErrorAction SilentlyContinue; Remove-Item -Path package-lock.json -ErrorAction SilentlyContinue

    # Для Bash/Git Bash:
    # rm -rf node_modules package-lock.json
    ```
3.  **Установите зависимости:**
    ```bash
    npm install
    ```

## Запуск

Для запуска фронтенд приложения:

1.  **Убедитесь, что вы находитесь в директории `vue-forms/`:**
    ```bash
    cd vue-forms
    ```
2.  **Запустите dev-сервер:**
    ```bash
    npm run dev
    ```
    Фронтенд будет запущен на `http://localhost:5173`.

## Интеграция с бэкендом

По умолчанию фронтенд использует внутреннюю имитацию сервера. Если вы хотите использовать внешний бэкенд (например, NestJS), создайте файл `.env` в корневой директории `vue-forms/` и добавьте следующую строку:

```
VITE_API_BASE_URL=http://localhost:3000
```
Замените `http://localhost:3000` на адрес вашего бэкенда, если он отличается.

## Сценарий проверки

1.  Откройте браузер по адресу `http://localhost:5173`.
2.  На главной странице вы увидите стилизованные кнопки для перехода к "Форма A", "Форма B" и "Результат".
3.  Перейдите на "Форма A" или "Форма B".
4.  Попробуйте ввести некорректные данные. Ошибки валидации должны появляться под полями. Кнопка "Отправить" должна быть неактивна.
5.  Введите корректные данные. Кнопка "Отправить" станет активной.
6.  Нажмите "Отправить". Появится индикатор загрузки.
7.  При успешной отправке (80% шанс) вас перенаправит на страницу результата (`/result`), где будут отображены `requestId` и `classifier`.
8.  При ошибке (20% шанс) на форме появится сообщение об ошибке.
9.  На страницах форм и на странице результата есть кнопка "Главный экран" для возврата на главную страницу.
