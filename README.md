Dette er en blogg satt opp med gatsby.js for å dokumentere IS-304 og IS-305.


<h2>Kjøre prosjektet lokalt</h2>

1. npm install

2. npm install --global gatsby-cli

3. gatsby develop

4. tilgjengelig på localhost:8000


<h2>Legge til ny post</h2>

En ny post lages ved å opprette ny mappe under 'src/pages'. Navnet på mappen som opprettes brukes som URL for posten. Den nye mappen må ha en 'index.md' fil hvor man fyller inn informasjonen som skal vises i posten. Det enkleste er å kopiere 'index.md' fra en tidligere post og bytte ut informasjonen.

I 'src/templates/blog-post.js' er templaten som brukes til postene, så hvis du vil endre utseendet må det gjøres der.

Ved hjelp av graphql blir innholdet tilgjengelig som props i templaten.

