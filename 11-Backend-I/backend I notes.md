## Backend I

### Http Protocol
- Set of rules need to follow while communicating between client and server.
- Stateless, each request is independent of previous request.
- eg. You type a URL -> Browser sends an HTTP req to server asking for the page -> Server processes the req and sends back an HTTP response -> Browser displays that site.

    #### Types of Request

        a. GET - Retrieve data
        
        b. PUT - Update data

        c. POST - Submit data

        d. DELETE - Remove data

### Idempotent
- A request is idempotent if making the same request multiple times gives the same result as making it once.

#### Idempotent
GET 
- retrieves same data
- eg. GET /product?id=123

PUT 
- updates data with same value
- eg. PUT /product/123 with body { "price": 799 }

DELETE 
- deleting data
- eg. DELETE /product/123

#### No idempotent

POST 
- creates a new data(order) even if its same value
- eg. POST /order with body { "product_id": 123 }

### Client and Server
#### Client
- Request maker, can be application, your laptop, tools like Postman.
- Requests some data from server.

#### Server
- A machine (or group of machines) handles request, processes and responds.
- Stores backend logic and handles authentication, databases and APIs.
eg. 
1. Web server - Serves HTML, CSS and Js (Apache, Nginx)

2. Application server - Runs backend logic (Node.js, Django, Spring boot)

3. Database server - Stores and manages data (MongoDB, MySQL)

4. File server - Stores files like doc, images, videos (Amazon S3)

5. Mail server - Sends, receives and stores emails (Outlook, Gmail, Postfix)

6. Proxy server - Acts as middleman between client and server, to fetch the blocked site w/o knowing client identity, cache data (Cloudfare, Nginx)

7. Cloud server - Virtual server which contains web apps, APIs, Databases, etc hosted on platforms like AWS EC2, Azure for 24/7 availability

### OSI model layers
1. Application - Browser uses HTTP to req a page.

2. Presentation - Data is encrypted using SSL/TLS.

3. Session - Session between your browser and server.

4. Transport - TCP ensuring data reliably sent and received.

5. Network - IP routes data across the internet like where to send.

6. Data - Your device's MAC address help send data over Wifi/Ethernet.

7. Physical - Electrical signals passed through cables.

### Domain Name Resolution
- Converting human readable domain name into machine readable IP address.
- DNS resolves www.website.com to 11.12.13.14.
- eg. nslookup to see ip addresses of domain names.

### Load balancer
- Balances the traffic of multiple requests.
- Types
1. Round Robin - Requests are distributed sequentially.
2. Least Connections - Sends traffic to fewest active connectioned server.
3. IP Hash - Uses client's ip address to determine where to send the request.
- eg. Nginx, AWS Elastic Load Balancing, Azure Load Balancer.

### Reverse proxy
- A server that sits in front of backend servers and handles incoming client req on their behalf.
- Takes the request and forwards to backend servers (file, backend, database) and receives response and send back to client.
- Hides backend servers details from client, distributes traffic across servers, stores responses to reduce load and improve speed.
- eg. Client (browser) -> Reverse Proxy (Nginx) -> Frontend (React)/ Backend (API)/ Database (MongoDB)

### TCP Protocol
- Transmission Control Protocol to ensure reliability of data.
- eg.
1. Web browsing (HTTP/HTTPS)
2. Email (SMTP, IMAP, POP3)
3. File transfers (FTP)

### 3-way Handshake Protocol
```

         | -------- SYN -------->   |

  Client | <----- SYN + ACK -----   | Server

         | -------- ACK -------->   |
```

### Steps to create server

- Open backend folder in terminal
- Run ```npm init -y```
- Open backend folder in vscode
- Run ```npm i express``` to create package-lock.json file along with node_modules
- Create a server.js file
- Create a server with express
- To run server, run command ```node server.js```
- To parse data from request.body, we need middleware ```body-parser``` so run ```npm i body-parser```
- To connect express server with mongodb use ```mongoose``` so run ```npm i mongoose```

### Note
- If you don't write -y flag with ```npm init``` then it will ask some questions like name of package, git repo name, test command and version, etc.
- You can't see POST request in browser, you need Postman for that.

### Data Parsing
- Fetching data from string of data like json, xml, text into readable structured format like object.
- To parse from req.body, query or url params of HTTP requests.

### ODM 
- Object Document Mapper, helps to interact with NoSQL databases using objects in your code.
- Allows you to define schema, create model and use that model for CRUD operations in your code w/o writing db queries manually.
- eg.
```javascript
// w/o ODM
db.users.insertOne({ name: "Krushna", age: 25 }); 
```

```javascript
// with ODM
const User = mongoose.model('User', { name: String, age: Number });

const newUser = new User({ name: "Krushna", age: 25 });
newUser.save();
```

### Note 
- If you don't have specified database in mongodb then mongodb will create that database when you will define some schema and save that document.

eg.

```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/myDatabase', {})
    .then(() => {
        console.log("DB connected successfully")

        const userSchema = new mongoose.Schema({ name: String });
        const User = mongoose.model('User', userSchema);

        // Create and save a document
        const newUser = new User({ name: 'Krushna' });
        newUser.save().then(() => console.log("Document saved"));

    })
    .catch((err) => console.log("DB connection unsuccessfull", err))
```
