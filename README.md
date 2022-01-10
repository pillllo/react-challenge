## Opis
To repozytorium zawierającym kod do Wyzwania React Dare IT.
Informajce na temat zadań oraz tego jak rozpocząć pracę nad nimi będziesz otrzymywać mailowo.

# Dokumentacja

## 🧰 Instalacja pakietów NPM

znajdując się w katalogu głównym repozytorium react-challenge, uruchom terminal a następnie wywołaj następującą komendę

    npm i


✨ Terminal powinien wyglądać mniej więcej tak ✨

![Matrix terminal image](https://w0tt.files.wordpress.com/2011/06/matrix.gif?w=613&zoom=2)


a tak naprawdę tak ⏳ dodatkowo instalacja może zająć trochę czasu ⏳

Zwróć uwagę na `[install:client]` oraz `[install:server]`. Jednocześnie przebiega instalacja dla dwóch aplikacji - client, to tam będą wykonywane zadania oraz server, który będzie zasilał apkę front-endową danymi.
```
 adrianaolszak@Admins-MacBook-Pro > ~/WebstormProjects/non-work/dareit/react-challenge > npm i

> challenge@1.0.0 postinstall /Users/adrianaolszak/WebstormProjects/non-work/dareit/challenge
> run-p -l install:server install:client

[install:client] 
[install:client] > challenge@1.0.0 install:client /Users/adrianaolszak/WebstormProjects/non-work/dareit/challenge
[install:client] > cd client && npm install
[install:client] 
[install:server] 
[install:server] > challenge@1.0.0 install:server /Users/adrianaolszak/WebstormProjects/non-work/dareit/challenge
[install:server] > cd server && npm install
[install:server] 

```

Jeżeli wszystko ukończyło się pomyślnie process w terminalu się zakończy.

Jeżeli coś będzie nie tak konsola na pewno poinformuje Cię o tym dużym błędem ;)


## 🏃 Uruchomienie aplikacji

### 🔗 Client i Server zawsze razem

Repozytorium jest skonstruowane w taki sposób aby aplikacja client oraz aplikacja server były uruchamiane jednocześnie. Jest to wymagane ponieważ jedno bez drugiego nie bedzie prawidłowo funkcjonować.

🔵 Pamiętaj aby zainstalować pakiety npm! Opisane w poprzednim kroku

Znajdująć się w katalogu głównym Twojego repozytorium uruchom terminal i wykonaj polecenie:

     npm run start


Komenda ta uruchomi 2 aplikacje które będą dostępne pod następującymi adresami:
- client - aplikacja reactowa - http://localhost:3000
- server - aplikacja backendowa - http://localhost:4320
    - dokumentacja API jest dostępna pod adresem http://localhost:4320/swagger

## 🏃 Uruchomienie testów automatycznych

Każde zadanie będzie udostepnione z wachlarzem testów automatycznych typu e2e. Pozwala to nam na automatyczne sprawdzenie czy zadanie zostało wykonane poprawnie, a także służy Ci za informacje na temat Twojego progresu.

Testy Automatyczne możesz i jest to wskazane, uruchomić lokalnie. Ten sam zestaw testów będzie również uruchamiany po przesłaniu Twojego rozwiązania do serwisu GitHub.

Uruchamianie ich lokalnie pozwoli Ci sprawdzić czy zadanie zostało pomyślnie ukończone oraz ile jest jeszcze elemantów, które musisz poprawić.

Aby uruchomić testy należy, uruchomić clienta i serwer (może być to ten sam proces który został uruchomiony w poprzednim zadaniu) tak jak do tej pory uruchomić komendę z poziomu katalogu głównego:

    npm run cypress:open

To polecenie uruchomi panel Cypress, w którym możesz uruchomić wszystkie lub wybrane testy.
