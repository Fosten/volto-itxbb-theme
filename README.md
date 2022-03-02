# volto-itxbb-theme

[Volto](https://github.com/plone/volto) add-on

## Getting started

### Try volto-itxbb-theme with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

1. Start Plone backend
   ```
   docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone
   ```

1. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@Fosten/volto-itxbb-theme" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-itxbb-theme to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

1. Start Volto frontend

* If you already have a volto project, just update `package.json`:

   ```JSON
   "addons": [
       "@Fosten/volto-itxbb-theme"
   ],

   "dependencies": {
       "@Fosten/volto-itxbb-theme": "Fosten/volto-itxbb-theme"
   }
   ```

* If not, create one:

   ```
   npm install -g yo @plone/generator-volto
   yo @plone/volto my-volto-project --addon @Fosten/volto-itxbb-theme
   cd my-volto-project
   ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!
