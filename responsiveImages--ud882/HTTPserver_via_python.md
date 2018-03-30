### Set up a HTTP Server with Python

1. cd to the project's directory

2. run the command
> python -m http.server

3. Your http server will start in port 8000. You will get the message:

> Serving HTTP on 0.0.0.0 port 8000 ...

4. Now open a browser and type the following address:

> http://127.0.0.1:8000 **or** http://0.0.0.0:8000   **or**  http://localhost:8080/

5. If the directory has a file named **index.html**, that file will be served as the initial file. If there is no index.html, then the files in the directory will be listed.

6. If there are errors, you might need to specify the port used (ex. port 8080) like this:

> python -m http.server 8080

7. If there are errors, you might also need to bind to a specific interface instead of all the interfaces by using the -b/--bind flag :
- 8000 is the port number ; 80 is used as the standard port for HTTP communications.

> python -m http.server 8000 --bind 127.0.0.1
