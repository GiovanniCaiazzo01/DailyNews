
## Author

- [@GiovanniCaiazzo01](https://www.github.com/GiovanniCaiazzo01)


## Demo
https://tubular-pithivier-e141a8.netlify.app/


# Daily News

This web application provides users with the latest daily news from various sources around the world. The application is still in development, but currently users can access general news without any filters. If a user chooses to log in, they can select the language in which they prefer to read the news.

Thanks to a simple and intuitive interface, users can easily navigate through the available news and choose the ones that interest them. The application ensure that the news is always up-to-date and carefully selected from authoritative sources.

Overall, my web application is a great resource for anyone who wants to stay informed about the latest news from around the world. Although it is still in development, the application provides a simple and intuitive reading experience, with the ability to customize the language of the news based on user preferences and Taking into account any bugs and optimizations that can be made.



## Status (MVP)

At present, the application is a minimum viable product (MVP), meaning that it provides a basic set of features to satisfy early users and gather feedback for further development.

While the application is functional and provides access to daily news from around the world, there are still some areas where it can be improved. For example, users are currently only able to access general news without any filtering options, and the application is only available in a limited number of languages.
ome of the planned improvements include adding filtering options to allow users to view news in specific categories, expanding the language options, and implementing a personalized news feed based on user preferences.
## Installation

Clone the project

```bash
git clone https://github.com/GiovanniCaiazzo01/DailyNews.git
```

Go to the project directory

SERVER
```bash
  cd portal-BEN
  npm i
```
    
CLIENT
```bash
  cd portal-BEN
  npm i
```
## Run Locally

TO START SERVER

```bash
  cd portal-BEN
```

```bash
  npm run dev
```

TO START CLIENT

```bash
  cd portal-FEN
```

```bash
  npm run dev
```
## Tech Stack

**Client:** React

**Server:** Node, Express

**Database:** MongoDB


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

| Parameter     |Description                                        |
| :------------ |:------------------------------------------------- |
| `PORT`        |**Required**. The port where the server will listen |
| `DB_NAME`     |**Required**. Your database name                   |
| `DB_URI`      |**Required**. Your database URI                    |
| `KEY_NEWSDATA`|**Required**. Your personal key retrieved on NewsData |
| `SECRET_KEY`  |**Required**. Your secret JWT key                  |


