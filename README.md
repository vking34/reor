# REOR

A web app for ordering dishes in a restaurant

## API Docs

- https://documenter.getpostman.com/view/4640091/TzCFhqvq

## Prerequisites

- To use AWS SES:
    - Set env var:
        - ```AWS_ACCESS_KEY_ID```
        - ```AWS_SECRET_ACCESS_KEY```

- To use Telegram bot:
    - Create Telegram bot
    - Invite bot into a group
    - Set bot as administrator in the group
    - Set env var: ```TELEGRAM_BOT_TOKEN```


## Heroku Deployment

- Create app on heroku

- Create ```Procfile``` to help heroku how to run the app

- Add remote repo on heroku:
    ```
    heroku git:clone -a vg-reor
    ```

- Commit code

- Push to heroku:
    ```
    git push heroku master
    ```

## ER Diagram

- Source: https://drive.google.com/drive/u/7/folders/1LqHabMC8ZrEtD1AGvwfNfyeXrDg6sQDc