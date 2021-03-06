# Content

## Best Practices
* [Best Practices ABNB](https://github.com/airbnb/javascript)
* [Best Practices](https://code.tutsplus.com/tutorials/top-15-best-practices-for-writing-super-readable-code--net-8118)

## HTTP
### The status codes
The status codes are all three-digit numbers that are grouped by the first digit into 5 groups. The reason phrases given with the status codes below are just suggestions. Server can return any reason phrase they wish.

#### 1xx: Informational
No 1xx status codes are defined, and they are reserved for experimental purposes only.

#### 2xx: Successful
Means that the request was processed successfully.

**200** OK
Means that the server did whatever the client wanted it to, and all is well.
Others
The rest of the 2xx status codes are mainly meant for script processing and are not often used.

#### 3xx: Redirection
Means that the resource is somewhere else and that the client should try again at a new address.

**301** Moved permanently
The resource the client requested is somewhere else, and the client should go there to get it. Any links or other references to this resource should be updated.
**302** Moved temporarily
This means the same as the 301 response, but links should now not be updated, since the resource may be moved again in the future.
**304** Not modified
This response can be returned if the client used the if-modified-since header field and the resource has not been modified since the given time. Simply means that the cached version should be displayed for the user.

#### 4xx: Client error
Means that the client screwed up somehow, usually by asking for something it should not have asked for.

**400**: Bad request
The request sent by the client didn't have the correct syntax.
**401**: Unauthorized
Means that the client is not allowed to access the resource. This may change if the client retries with an authorization header.
**403**: Forbidden
The client is not allowed to access the resource and authorization will not help.
**404**: Not found
Seen this one before? :) It means that the server has not heard of the resource and has no further clues as to what the client should do about it. In other words: dead link.

#### 5xx: Server error
This means that the server screwed up or that it couldn't do as the client requested.

**500**: Internal server error
Something went wrong inside the server.
**501**: Not implemented
The request method is not supported by the server.
**503**: Service unavailable
This sometimes happens if the server is too heavily loaded and cannot service the request. Usually, the solution is for the client to wait a while and try again.
The response header fields
These are the header fields a server can return in response to a request.

### Location
This tells the user agent where the resource it requested can be found. The value is just the URL of the new resource.
Server
This tells the user agent which web server is used. Nearly all web servers return this header, although some leave it out.
#### Content-length
This gives the size of the resource, in bytes.
#### Content-type
This describes the file format of the resource.
#### Content-encoding
This means that the resource has been coded in some way and must be decoded before use.
#### Expires
This field can be set for data that are updated at a known time (for instance if they are generated by a script). It is used to prevent browsers from caching the resource beyond the given date.
#### Last-modified
This tells the browser when the resource was last modified. Can be useful for mirroring, update notification etc.

## URL
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument

* Protocol
  http://
* Domain (or Host)
  www.example.com
* Port
  :80
* Resource Path
  path/to/myfile.html
* Query Parameters
  ?key1=value1&key2=value2
* Anchor
  #SomewhereInTheDocument

## User Agents
A User Agent is a short string that web browsers and other applications send to identify themselves to web servers.  — [Definitions.net](http://www.useragents.com/)

## Stateless Protocol
In computing, a **stateless protocol** is a communications protocol in which no session information is retained by the receiver, usually a server. Relevant session data is sent to the receiver by the client in such a way that every packet of information transferred can be understood in isolation, without context information from previous packets in the session. This property of stateless protocols makes them ideal in high volume applications, increasing performance by removing server load caused by retention of session information.

A stateless protocol does not require the server to retain session information or status about each communicating partner for the duration of multiple requests. In contrast, a protocol that requires keeping of the internal state on the server is known as a stateful protocol. A TCP connection-oriented session is a 'stateful' connection because both systems maintain information about the session itself during its life.

Examples of stateless protocols include the Internet Protocol (IP), which is the foundation for the Internet, and the Hypertext Transfer Protocol (HTTP), which is the foundation of data communication for the World Wide Web.

## JSON
### JSON.parse()
Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
Converts to an **object**.

### JSON.stringify()
Return a JSON string corresponding to the specified value, optionally including only certain properties or replacing property values in a user-defined manner.
Converts to a **string**.
**Content-Type: application/json; charset=utf-8** indicates the media type and character encoding of the response body.

## cURL
[cURL](https://www.thegeekstuff.com/2012/04/curl-examples/) is a command line utility that is used to make HTTP requests to a given URL and it outputs the response. It allows you to **see** the **URL**.

## [File IO](https://web.compass.lighthouselabs.ca/activities/196)
Reading and writing files on the local filesystem, as well as the differences between synchronous and asynchronous file I/O.
For more information click [here](http://www.tutorialspoint.com/nodejs/nodejs_file_system.htm) or go to the official [website](https://nodejs.org/api/fs.html).

##[Streams](http://www.tutorialspoint.com/nodejs/nodejs_streams.htm)
Streams are objects that let you read data from a source or write data to a destination in continuous fashion.

## [DNS](https://web.compass.lighthouselabs.ca/days/w01e/activities/193)

## [API](https://web.compass.lighthouselabs.ca/activities/199)

## [Updating Vagrant](https://web.compass.lighthouselabs.ca/days/w01e/activities/493)
