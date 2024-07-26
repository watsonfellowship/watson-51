# Watson Foundation Fellows Microsite

## Setting up local development

- Clone the repository
- To run the project: `bundle exec jekyll serve --watch  --livereload`
- If you run into trouble starting the project, try `rbenv install 2.5.1` followed by `bundle install`.

## Updating content 

### Creating a class archive

1. In `_archive`, add a subdirectory with the name of the class you're updating, ex `22-23`
2. Copy the current working .md files from `_fellows ` into that folder
3.  In the project root, add a subdirectory with the name of the class you're updating, ex `22-23`
4. Copy three things into this new class-specific subdirectory from the published `_site` folder:
   1. `fellows`  (compiled HTML)
   2. `images`, including all its subfolders
   3. `index.html`
5. **Update global assets.** Within the new archive directory, find & replace `http://localhost:4000/` with `/` so the archive site is referencing global files for CSS, JS, favicon, social card, etc.
6. **Update fellow links.** Within the new archive directory, find & replace `href="/fellows/` with `href="/22-23/fellows/` so that the subdirectory only links to itself, not the project root.
7. **Update image links.** Within the new archive directory, find & replace `src="/images/` with `src="/22-23/images/` so that images are pulled from the archive, not the project root.
8. Update the logo/homepage link. Within the new archive directory, find & replace `<a class="site-header__logo-link" href="/home">` with `<a class="site-header__logo-link" href="/22-23">` so that visitors to the archive class stay there.



### Set up the new class

1. In `index.md`, change the `layout` from `home` to `redirect`, and the `redirect` to the new archived subdirectory. This will hide the working files when someone visits the homepage.
2. In `home.md`, change the `layout` from `redirect` to `home`. This will temporarily allow` /home.html` to act as the in-progress site's homepage, while hiding it from public view.
3. Update the `title` field in `_config.yml` to match the new class.



### Entering content for the new class

1. For text changes, edit the files found in `_fellows`. Each fellow should have a markdown file named `firstname-lastname.md`. The format for each file should be as follows:

```
---
layout: fellows

title: The full name of the fellow (ex: Abel Sapirstein)

pronouns: The fellow's preferred pronouns. Field is optional. (ex: He/Him/His)

email: The fellow's email address (ex: asprstn@gmail.com)

school: The school attended by the fellow. Field is optional. (ex: Harvey Mudd College)

project: The title of the fellow's project. Titles should be wrapped in quotation marks, since this will escape any special characters that would otherwise create conflicts with markdown formatting. (ex: "Working Towards Health Equity: Global Perspectives")

countries: Dash-formatted bullet list of the countries visited by the fellow. Ex:
  - Nepal
  - Rwanda
  - South Africa
  - Norway
  - Argentina
  - Chile

---

The descriptive paragraph(s) about the fellow's project should go here.
```

2. The homepage intro text should be added to both `home.md` and `index.md`. 
3. Hero images should be save as JPGs in `images/hero`, and follow the naming convention `firstname-lastname-hero.jpg`.
4. Thumbnail images should be saved as JPGs in `images/profile`, and follow the naming convention `firstname-lastname.jpg`. 
5. Travel images should be saved as JPGs in `images/travel`, and follow the naming convention `firstname-lastname-*.jpg`. ( `*` can be anything, as long as the image's file name starts with the fellow's first and last name.)



### Deploying the new class

1. In `home.md`, change the `layout` from `home` to `redirect`, and make sure that the `redirect` value is `/`. This will redirect `home.html` to the real site homepage.
2. In `index.md`, change the `layout` from `redirect` to `home`, and delete or comment out the `redirect` value. This will update the site's homepage to show the new class of fellows instead if redirecting to the previous class.
3. For an example of a pull request making these changes, see https://github.com/watsonfellowship/watson-51/pull/47.